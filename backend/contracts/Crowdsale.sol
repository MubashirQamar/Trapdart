// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/ICrowdSale.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
  
contract Crowdsale is Ownable, ReentrancyGuard , ICrowdSale {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    
    // The token being sold
    address private _token;

    // Address where funds are collected
    address payable private _wallet;
    address payable public _manager;
    
    uint256 public currentRound = 0 ;

    // How many token units a buyer gets per wei.
    // The rate is the conversion between wei and the smallest and indivisible token unit.
    // So, if you are using a rate of 1 with a ERC20Detailed token with 3 decimals called TOK
    // 1 wei will give you 1 unit, or 0.001 TOK.

    uint256 private _rate;
    uint256 public min;
    uint256 public minBuy = 0.5 ether;
    uint256 public maxBuy = 1 ether;
    uint256 private oneroundFund = (88888888 * 10 **18 /100 )*10;
    mapping(address => bool) public _payees;
    

    // Amount of wei raised
    uint256 private _weiRaised;
    uint256 private _tokenPurchased;
    bool public success;
    bool public finalized;
    bool public _buyable;

    event TokensPurchased(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);
    
    mapping (address => uint256) purchase;
    mapping (uint256 => uint256) round_purchase;
    mapping (uint256 => uint256) round_endingUnix;
    mapping (uint256 => uint256) round_startingUnix;
    mapping (address => uint256) msgValue;
    uint256 current = block.timestamp * 1 seconds;
    uint256 buyTime = block.timestamp + 2 seconds;//+ 15 days
    
    constructor ( address payable wallet_) {
        _wallet = wallet_;
    }

    function setTokenAddress(address token_) public onlyOwner{
        require(address(token_) != address(0),"0 address");
        _token = token_ ;
    }

    function addWhitelist(address[] memory payees) payable public onlyOwner{
        require(payees.length > 0, " no payees");

        for (uint256 i = 0; i < payees.length; i++) {
            _addPayee(payees[i]);
        }
    }

    function _addPayee(address account) private {
        require(account != address(0), " account is the zero address");
        _payees[account] = true;
    }

    function getRoundPrice(uint256 roundNo) public view returns(uint256 price){
        uint256 price;
        if(roundNo == 1){
            price = 0.6 * 10 ** 1;
        }else if(roundNo == 2){
            price = 0.8 * 10 ** 1;
        }else if(roundNo == 3){
            price = 1 * 10 ** 1;
        }else{
            require(false , "incorrect round");
        }
    }

    function inc_purchase(uint256 roundNo , uint256 amount) private returns(uint256 price){
        uint256 price;
        if(roundNo == 1){
            require(getRoundlimit(roundNo) > round_purchase[roundNo] + amount , "round 1 purchase limit exceed");
            round_purchase[roundNo] += amount ;
        }else if(roundNo == 2){
            require(getRoundlimit(roundNo) > round_purchase[roundNo] + amount , "round 2 purchase limit exceed");
            round_purchase[roundNo] += amount ;
        }else if(roundNo == 3){
            require(getRoundlimit(roundNo) > round_purchase[roundNo] + amount , "round 3 purchase limit exceed");
            round_purchase[roundNo] += amount ;
        }else{
            require(false , "incorrect round");
        }
    }

    function getRoundlimit(uint256 roundNo) public view returns(uint256 limit){
        uint256 price;
        if(roundNo == 1){
            limit = oneroundFund;
        }else if(roundNo == 2){
            limit = oneroundFund;
        }else if(roundNo == 3){
            limit = oneroundFund * 2;
        }else{
            require(false , "incorrect round");
        }
    }

    function getRoundDuration(uint256 roundNo) public view returns(uint256 Time){
        uint256 price;
        if(roundNo == 1){
            Time = 5 seconds;
        }else if(roundNo == 2){
            Time = 5 seconds;
        }else if(roundNo == 3){
            Time = 5 seconds;
        }else{
            require(false , "incorrect round");
        }
    }

    function startNextRound() public onlyOwner {
        currentRound++;
        round_endingUnix[currentRound] = block.timestamp + getRoundDuration(currentRound);
        round_startingUnix[currentRound] = block.timestamp ;
    }

    function requirements(uint256 round , address account) private {
        require(block.timestamp > round_startingUnix[round] && block.timestamp <round_endingUnix[round] , "round finished");
        if(round == 1 || round == 2){
            require(_payees[account],"you are not whitelisted");
        }
    }

    function isNFTbuy(address account) public override view returns(bool){
        if(block.timestamp > round_startingUnix[currentRound] && block.timestamp <round_endingUnix[currentRound]){
            if(currentRound == 1 || currentRound == 2){
               return _payees[account];
            }else if(currentRound == 3){
                return true;
            }else{
                return false;
            }
        }
    }

    

    /**
     * @dev fallback function ***DO NOT OVERRIDE***
     * Note that other contracts will transfer funds with a base gas stipend
     * of 2300, which is not enough to call buyTokens. Consider calling
     * buyTokens directly when purchasing tokens from a contract.
     */


    fallback () external payable {
        buyTokens();
    }

    receive () external payable {
        buyTokens();
    }

    /**
     * @return the token being sold.
     */
    function token() public view returns (address) {
        return _token;
    }

    /**
     * @return the address where funds are collected.
     */
    function wallet() public view returns (address payable) {
        return _wallet;
    }

    /**
     * @return the number of token units a buyer gets per wei.
     */
    function rate() public view returns (uint256) {
        return _rate;
    }

    /**
     * @return the amount of wei raised.
     */
    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    function buyable()public returns(bool) { 
        if(buyTime > block.timestamp){
            _buyable = true;
        }
        return _buyable;
    }

    
    function buyTokens() public nonReentrant payable {
       requirements(currentRound,_msgSender());

        uint256 weiAmount = msg.value;

        uint256 rate = 0;
        if(currentRound==1){
            rate = 0.6 ether;
        }else if(currentRound == 2){
            rate = 0.8 ether;
        }else if(currentRound == 3){
            rate = 1 ether;
        }else{
            require(false);
        }
        // calculate token amount to be created
        uint256 tokens = 0;
        unchecked {
        uint256 one = 1 ether;
        tokens = ((one) * weiAmount ) / rate; //(getRoundPrice(currentRound));
        }
        // uint256 rate = 1 * 10 ** 18 / getRoundPrice(currentRound);
        // uint256 tokens = _getTokenAmount(weiAmount , rate);
        inc_purchase(currentRound , tokens);
        require(IERC20(_token).balanceOf(address(this)) >= tokens,"buy amount exceeds not enough Tokens remaining");
        _tokenPurchased = _tokenPurchased + tokens;

        // update state
        _weiRaised = _weiRaised.add(weiAmount);
        
            msgValue[_msgSender()] = msgValue[_msgSender()] + weiAmount;
            purchase[msg.sender]= purchase[msg.sender]+tokens;
            _processPurchase(_msgSender(), tokens);
            _forwardFunds(weiAmount);

       
    }

    function claim() public payable {
        require (finalized,"ICO not finalized yet");

      
        uint256 t = purchase[_msgSender()];  
        require (t>0,"0 tokens to claim");
        _processPurchase(_msgSender(), t);
         delete purchase[_msgSender()];
     
    }
    
    function balance() public view returns(uint){
        return IERC20(_token).balanceOf(address(this));
    }

    function Finalize() public  returns(bool) {
        
         uint256 remainingTokensInTheContract = IERC20(_token).balanceOf(address(this)) - _tokenPurchased;
        IERC20(_token).safeTransfer(address(_manager),remainingTokensInTheContract);
        finalized = true;
        return success;
    }

    /**
     * @dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met.
     * Use `super` in contracts that inherit from Crowdsale to extend their validations.
     * Example from CappedCrowdsale.sol's _preValidatePurchase method:
     *     super._preValidatePurchase(beneficiary, weiAmount);
     *     require(weiRaised().add(weiAmount) <= cap);
     * @param beneficiary Address performing the token purchase
     * @param weiAmount Value in wei involved in the purchase
     */
    // function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
    //     require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
    //     require(weiAmount != 0, "Crowdsale: weiAmount is 0");
    //     this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
    // }

    /**
     * @dev Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid
     * conditions are not met.
     * @param beneficiary Address performing the token purchase
     * @param weiAmount Value in wei involved in the purchase
     */
    // function _postValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
    //     // solhint-disable-previous-line no-empty-blocks
    // }

    /**
     * @dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends
     * its tokens.
     * @param beneficiary Address performing the token purchase
     * @param tokenAmount Number of tokens to be emitted
     */
    function _deliverTokens(address beneficiary, uint256 tokenAmount) internal {
        IERC20(_token).safeTransfer(beneficiary, tokenAmount);
    }

    /**
     * @dev Executed when a purchase has been validated and is ready to be executed. Doesn't necessarily emit/send
     * tokens.
     * @param beneficiary Address receiving the tokens
     * @param tokenAmount Number of tokens to be purchased
     */
    function _processPurchase(address beneficiary, uint256 tokenAmount) internal {
        _deliverTokens(beneficiary, tokenAmount);
    }

    /**
     * @dev Override for extensions that require an internal state to check for validity (current user contributions,
     * etc.)
     * @param beneficiary Address receiving the tokens
     * @param weiAmount Value in wei involved in the purchase
     */
    function _updatePurchasingState(address beneficiary, uint256 weiAmount) internal {
        // solhint-disable-previous-line no-empty-blocks
    }

    /**
     * @dev Override to extend the way in which ether is converted to tokens.
     * @param weiAmount Value in wei to be converted into tokens
     * @return Number of tokens that can be purchased with the specified _weiAmount
     */
    function _getTokenAmount(uint256 weiAmount , uint256 rate) internal view returns (uint256) {
        return weiAmount.mul(rate);
    }

    /**
     * @dev Determines how ETH is stored/forwarded on purchases.
     */
    function _forwardFunds(uint256 amount) internal {
        _wallet.transfer(amount);
    }

      
}