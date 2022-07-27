import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { nft } from "../components/Images";

import {nFT_addr  ,crowdsale_addr} from "../contract/addresses"
import NFTAbi from "../contract/NFT.json"
import CrowdsaleABI from "../contract/Crowdsale.json"

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

import Web3Modal from 'web3modal'

function Gallery() {

    const {
        connector,
        library,
        account,
        chainId,
        activate,
        deactivate,
        active,
        errorWeb3Modal
    } = useWeb3React();

    const [currentRound , setCurrentRound] = useState()
   

    const loadProvider = async () => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            return provider.getSigner();
        }
        catch (e) {
            console.log("loadProvider: ", e)
            
        }
    }

    const _currentRound = async () => {
        try {

            let signer = await loadProvider()
            let NFTCrowdsaleContract = new ethers.Contract(crowdsale_addr, CrowdsaleABI, signer);
            let start = await NFTCrowdsaleContract._currentRound()
            setCurrentRound(Number(start.toString()))

        } catch (e) {
            console.log("data", e)
        }
    }

    

    const buyNFT = async (type , round) => {
        let price
        try {

            if(round < 4){
                if(currentRound != round){
                    return false
                }
            }

            let signer = await loadProvider()
            let NFTContract = new ethers.Contract(nFT_addr, NFTAbi, signer);
            price = await NFTContract.getRoundPrice(type)
            console.log("data", price.toString())
            let buy = await NFTContract.createToken(account , type ,{value: price.toString()})
            await buy.wait()

        } catch (e) {
            console.log("data", price.toString())
            console.log("data", e)
        }
    }


    useEffect(async ()=>{
        (async ()=>{
          if(library && account){
            try {
                _currentRound()
            }
            catch(error){
        
            }
            return () => {
            };
          }
        })();
      }, [library, account, chainId]);


    return <>
        <main>
            <section className="section ">
                <h2 className="second-title mt-5">Gallery</h2>
                <div className="mt-5">
                <div className="text-box">
                    <p>Lorum ipsum</p>
                </div>
                </div>
                <div className="nft-section">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="nft-box">
                                    <p className="normal-text">New NFT 3</p>
                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                        <p>Cost: 0.1 ETH<br/>
                                        Availability: 99/100<br/>
                                        Minimum holding: 10,000 TRAP
                                        </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(2 , 5)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nft-box">
                                    <p className="normal-text">New NFT 2</p>
                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                        <p>Cost: 0.5 ETH<br/>
                                        Availability: 20/20<br/>
                                        Minimum holding: 50,000 TRAP
                                        </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(1 , 5)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nft-box">
                                    <p className="normal-text">New NFT 1</p>
                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                        <p>Cost: 0.01 ETH<br/>
                                        Availability: 990/1000<br/>
                                        Minimum holding: 1,000 TRAP
                                        </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(3 , 5)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nft-box">
                                <p className="normal-text">Round 1 ICO <br/>Launch NFT</p>

                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                        <p>Cost: FREE<br/>
                                        Eligibilty: ICO Round 3 Participant<br/>
                                        Minimum holding: 50,000 TRAP
                                        </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(4 , 3)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nft-box">
                                <p className="normal-text">Round 2 ICO <br/>Launch NFT</p>
                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                    <p>Cost: FREE<br/>
                                        Eligibilty: ICO Round 2 Participant<br/>
                                        Minimum holding:  1 TRAP
                                        </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(4 , 2)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="nft-box">
                                <p className="normal-text">Round 3 ICO <br/>Launch NFT</p>
                                    <img className="nft-img" src={nft}/>
                                    <div className="box-footer">
                                    <p>Cost: FREE<br/>
                                        Eligibilty: ICO Round 1 Participant<br/>
                                        Minimum holding: 1 TRAP
                                    </p>
                                        <button className="custom-btn secondary-btn" onClick={()=>buyNFT(4 , 1)}>Mint</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </main>
    </>
}

export default memo(Gallery)