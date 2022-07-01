// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "hardhat/console.sol";
import "./interfaces/ICrowdSale.sol";

contract NFT is ERC721Enumerable , Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    
    bool public revealed ;
    uint256 public revealtime = 15 minutes;
    address private token;
    uint256 price = 0.1 ether; 


    uint256 rarity_1 = 1;
    uint256 constant rarity_1_limit = 100;

    uint256 rarity_2 = 101;
    uint256 constant rarity_2_limit = 120;

    uint rarity_3 = 121;
    uint256 constant rarity_3_limit = 1200;

    uint rarity_4 = 1201;
    
    // uint256 public tokenIds; 

    uint256 public maxGiveAway = 7777;

    uint256 public limit = 5 ;
    uint256 public limitationtime = block.timestamp + revealtime * 1 seconds;
    address public marketplace = address(0xB6E34EbeC469CdbE8BfF1270Ce8194Ec38B83B11);
    mapping (address => bool) private marketplaces;
    mapping (address => uint256) public purchase;
    mapping (uint256 => bool) private rev;
    using Strings for uint256;
    mapping (uint256 => string) private _tokenURIs;

    address CrowdSale;
        

     address public nftAddress;
    uint256 tokenID;
    
    
    struct NftDetails{
        address[] owner;
        uint256 creationTime;
    }

    mapping(address => bool) private _owner;
    mapping(uint256=>NftDetails) private _NftDetails;

    constructor() ERC721("Trap Dart", "TD")  {
       
        _owner[_msgSender()] = true;

        // _owner[preSale] = true;
        // _owner[pubSale] = true;
    }


    function addOwner(address owner_) public {
        require(_owner[_msgSender()]==true,"cannot Assign owner");
        _owner[owner_]=true;
    }

   

    function baseURI() public view returns(string memory){
        return "https://ipfs.io/ipfs/";
    }

    function createToken(address account , uint256 _type) public payable returns (uint) {
        // require(_tokenIds <= 7777);
        uint256 _id = getTokenId(_type , account) ;
        if(_tokenIds.current()>=limit){
            allreveal();
        }

        _tokenIds.increment();

        _mint(account, _id);
        // setTokenURI(newItemId,"https://ipfs.io/ipfs/QmeCq9iq1r8U1xKGZwdYiXTX3YByKsRycMpwoDD9uxboib");
        return _id;
    }

     
    
        
    function setTokenURI(uint256 tokenId, string memory tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = tokenURI;
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721URIStorage: URI query for nonexistent token"
        );
        //     string memory base = _baseURI();
        // string memory _tokenURI = string(abi.encodePacked(base, toString(tokenId)));

        // // If there is no base URI, return the token URI.
        // if (bytes(base).length == 0) {
        //     return _tokenURI;
        // }
        // // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        // if (bytes(_tokenURI).length > 0) {
        //     return string(abi.encodePacked(_tokenURI, ".json"));
        // }
        // //https://opensea.mypinata.cloud/ipfs/QmdZzz5vtgXMeYKKfYi795hze1GdMfxbyP4CLDFy4MUXEz/1.json

        // return super.tokenURI(tokenId);
        if(!revealed){
            return "https://opensea.mypinata.cloud/ipfs/QmWNfLtLqvgZ2KRRm3XL5ntqTXWvTUDftJ9xU7qUUCZvd6?filename=unrevealed.json";
        }else{
            string memory _tokenUri = returnTokenUri(tokenId);
            return _tokenUri;
        }
       
    }

    // for development
     function returnTokenUri(uint256 tokenId) 
        internal
        view
        returns (string memory)
    {
        require(tokenId <= 10000, "Invalid tokenId");
        if (tokenId >= 1 && tokenId <= 2500) {
            return "https://opensea.mypinata.cloud/ipfs/QmTC4K37sJVPiy1nMtvJnPw8D6ax2shBDqfuzKZNjwajGp/1.json";
            // 1
        } else if (tokenId >= 2501 && tokenId <= 5000) {
            return "https://opensea.mypinata.cloud/ipfs/QmTC4K37sJVPiy1nMtvJnPw8D6ax2shBDqfuzKZNjwajGp/2.json";
            // 2
        } else if (tokenId >= 5001 && tokenId <= 7500) {
            return "https://opensea.mypinata.cloud/ipfs/QmTC4K37sJVPiy1nMtvJnPw8D6ax2shBDqfuzKZNjwajGp/3.json";
            // 3
        } else if (tokenId >= 7501 && tokenId <= 10000) {
            return
                "https://opensea.mypinata.cloud/ipfs/QmTC4K37sJVPiy1nMtvJnPw8D6ax2shBDqfuzKZNjwajGp/4.json";
            // 4
        }
    }

    function getRoundPrice(uint256 _type) public view returns(uint256 price){
        if(_type == 1){
            price = 0.5 ether;
        }else if(_type == 2){
            price = 0.1 ether;
        }else if(_type == 3){
            price = 0.01 ether;
        }else if(_type == 4){
            price = 0;
        }else{
            require(false , "incorrect round");
        }
    }

    function getTokenId(uint256 _type , address account) internal returns (uint256) {
        uint256 tokenId;
        if (_type == 1) {
            require(
                rarity_1 <= rarity_1_limit,
                "Maximum limit reach for this nft"
            );
            require(IERC20(token).balanceOf(account) >= 50000 * 10 **IERC20Metadata(token).decimals(),"you need to hold 50,000 trapdart token");
            require(msg.value >= 0.5 ether , "please provide 0.5 ether");
            tokenId = rarity_1;
            rarity_1++;
            return tokenId;
        } else if (_type == 2) {
            require(
                rarity_2 <= rarity_2_limit,
                "Maximum limit reach for this nft"
            );
             require(IERC20(token).balanceOf(account) >= 10000 * 10 **IERC20Metadata(token).decimals(),"you need to hold 10,000 trapdart token");
            require(msg.value >= 0.1 ether , "please provide 0.1 ether");
            tokenId = rarity_2;
            rarity_2++;
            return tokenId;
        } else if (_type == 3) {
            require(
                rarity_3 <= rarity_3_limit,
                "Maximum limit reach for this nft"
            );
            require(IERC20(token).balanceOf(account) >= 1000 * 10 **IERC20Metadata(token).decimals(),"you need to hold 1,000 trapdart token");
            require(msg.value >= 0.01 ether , "please provide 0.01 ether");
            tokenId = rarity_3;
            rarity_3++ ;
            return tokenId;
        } else if (_type == 4) {
            require(ICrowdSale(CrowdSale).isNFTbuy(account),"Cant buy NFT");
            if(ICrowdSale(CrowdSale)._currentRound() == 1){
            require(IERC20(token).balanceOf(account) >= 1 * 10 **IERC20Metadata(token).decimals(),"you need to hold 1 trapdart token");

            }else if(ICrowdSale(CrowdSale)._currentRound() == 1){
            require(IERC20(token).balanceOf(account) >= 1 * 10 **IERC20Metadata(token).decimals(),"you need to hold 1 trapdart token");

            }else if(ICrowdSale(CrowdSale)._currentRound() == 1){
            require(IERC20(token).balanceOf(account) >= 50000 * 10 **IERC20Metadata(token).decimals(),"you need to hold 50000 trapdart token");

            }else{
                require(false , "cant buy");
            }
            tokenId = rarity_4;
            rarity_4++;
            return tokenId;
        }
    }

    function withdrawEth() public onlyOwner {
        (bool callSuccess, ) = payable(owner()).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Something went wront. Eth is not transferred");
    }

    function getNftDetails(uint256 _tokenId)private view returns(NftDetails memory){
        return _NftDetails[_tokenId];
    }

    function totalSupply() public override view returns(uint256){
        return _tokenIds.current();
    }

    //  require(id >= limit && block.timestamp >= limitationtime , "All NFT should be Minted");

    function setTokenAddress(address _token) public onlyOwner{
        require(_token != address(0),"0 address");
        token = _token ;
    }

    function setCrowdSaleAddress(address _CrowdSale) public onlyOwner{
        require(_CrowdSale != address(0),"0 address");
        CrowdSale = _CrowdSale ;
    }

     function allreveal()  private {
       revealed = true;
    }

    function getTime() private view returns(uint256){
        return block.timestamp;
    }

     function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        if(isContract(_msgSender()) && from != address(0)){     
            rev[tokenId] = true ;
        }
    }

    //   function AirDrop(string memory tokenURI , address account) public onlyOwner {
    //     createToken(account);
    // }
   

    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal override {
        super._setApprovalForAll(
       owner,
      operator,
      approved
    );
    }
    
   function isContract(address _addr) private returns (bool isContract){
  uint32 size;
  assembly {
    size := extcodesize(_addr)
  }
  return (size > 0);
}
    
}