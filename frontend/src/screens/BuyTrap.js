import { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { footerlogo } from '../components/Images'

import {crowdsale_addr} from "../contract/addresses"
import CrowdsaleABI from "../contract/Crowdsale.json"

import { useWeb3React } from "@web3-react/core";

import { ethers } from "ethers";
import Web3Modal from 'web3modal'




function BuyTrap() {

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
    const [currentRound , setCurrentRound] = useState("0")
    const [_value , setValue] = useState(0)
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    const increase = () => {

        if (qty < 100000000) {
            setQty(qty + 1)
            setValue(price * (qty + 1))
        }
    };

    const decrease = () => {
        if (qty > 1) {
            setQty(qty - 1)
            setValue(price * (qty - 1))
        }
    };

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
   
    const getRoundPrice = async () => {
        try {

            let signer = await loadProvider()
            let NFTCrowdsaleContract = new ethers.Contract(crowdsale_addr, CrowdsaleABI, signer);
            let round = await NFTCrowdsaleContract._currentRound()
            let _price = await NFTCrowdsaleContract.getRoundPrice(round)
            let value = ethers.utils.formatEther(_price)
            setPrice(Number(value))
            setValue(Number(value))
            console.log(Number(value))
            setCurrentRound(round.toString())

        } catch (e) {
            console.log("data", e)
        }
    }

    const buyTokens = async () => {
        try {

            let signer = await loadProvider()
            let NFTCrowdsaleContract = new ethers.Contract(crowdsale_addr, CrowdsaleABI, signer);
            let value_ = ethers.utils.parseEther(_value.toString())
            let buy = await NFTCrowdsaleContract.buyTokens({value : value_})
            await buy.wait()

        } catch (e) {
            console.log("data", e)
        }
    }


    useEffect(()=>{
        (async ()=>{
          if(library && account){
            try {
                getRoundPrice()
              
            }
            catch(error){
        
            }
            return () => {
            };
          }
        })();
      }, [library, account, chainId]);

    useEffect(()=>{
       
    },[qty])
    return <>
        <main>
            <section className="section section-padding">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={footerlogo} className="token-img" />
                    </Col>
                    <Col lg={6}>
                        <div className="text-box text-center buy-trap-section">
                            <h4 >BUY $TRAP</h4>
                            <h5 >1 ETH = 50 $TRAP</h5>
                            <h5>{parseFloat(_value.toFixed(3))} ETH</h5>
                            <div className="min-max">
                                <div class="increament">
                                    <div class="value-button decrease" id="decrease" value="Decrease Value" onClick={(e) => decrease()}>-</div>
                                    <input type="number" id="room-number" value={qty} min="1" max="20" class="number" onChange={(e) => setQty(e.target.value)} />
                                    <div class="value-button increase" id="increase" value="Increase Value" onClick={(e) => increase()}>+</div>
                                </div>
                            </div>
                            <button class="custom-btn secondary-btn" onClick={buyTokens}>Buy $TRAP Token</button>
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    </>
}

export default memo(BuyTrap)