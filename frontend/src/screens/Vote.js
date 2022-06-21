import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"

import axios from 'axios'

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from 'web3modal';


function Vote() {

    const {
        connector,
        library,
        account,
        chainId,
        activate,
        deactivate,
        active,
        error
      } = useWeb3React();


      const [proposalOBJ , setProposalOBJ] = useState([])



      const getProposals = async ()=>{
        try {

          const data = await axios.get(`${process.env.REACT_APP_BSE_API_URL}/proposals`)
          let temp = []
          data.data.map((arr) => {
            //let arr = 
            let obj = {
                description: arr.description,
                ipfs: arr.ipfs,
                proposal_id: arr.proposal_id,
                title: arr.title,
                total_passed: arr.total_passed,
                total_votes: arr.total_votes,
            }
            temp.push(obj)
            console.log("DATA :" , obj)

          })
          setProposalOBJ(temp)
        } catch (error) {
            console.log("getProposals :: ListVote screen :" , error)
        }
      }

      const loadProvider = async () => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            return provider.getSigner();
          } catch (e) {
            console.log("loadProvider default: ", e);
          }
    };

      const sig = async () => { 
        let signer = await loadProvider() 
        let message = "Casting a vote"
          let s = await signer.signMessage(message) 
          return s             
          }


      const castVote = async (con , id)=>{

        

        try {

            let signature = await sig()
            axios.post(`${process.env.REACT_APP_BSE_API_URL}/votes/${id}`, {
                
                    voter: account ,
                    vote_status : con ,
                    signature : signature
                
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        } catch (error) {
            
        }
    }


      useEffect(()=>{
        (async ()=>{
          if(library && account){
            try {
                getProposals()
            }
            catch(error){
              console.log("Error ",error.message);
            }
            return () => {

            };
          }
        })();
      }, [library, account, chainId]);



    return <>
        <main>
            <section className="section ">
                <h2 className="second-title mt-5">Vote</h2>
                <div className="mt-5">
                <div className="text-box">
                    <p>TRAP token holders can participate in polls to direct the
                    development and progression of the trapdArt platform. Polls
                    are discussed amongst the community in the Telegram channel
                    - https://t.me/trapdArt</p>
                </div>
                </div>
                {proposalOBJ.map((arr, i) => {
                     return(
                <div className="mt-5">
                <div className="text-box">
                    <p>{arr.title}</p>
                    <ul className="vote-ul">
                        <li>
                            <span>{arr.description}</span>
                            <button className="custom-btn secondary-btn" onClick={() => castVote(true,arr.proposal_id)}>Yes</button>
                            <button className="custom-btn secondary-btn" onClick={() => castVote(false,arr.proposal_id)}>No</button>
                        </li>
                        <li>
                            <span>Total Passed {arr.total_passed}</span>
                            
                        </li>
                        <li>
                            <span>Total Failed {(Number(arr.total_votes) - Number(arr.total_passed))}</span>
                        </li>
                    </ul>
                </div>
                </div>
                 )
                })}
              
            </section>
        </main>
    </>
}

export default memo(Vote)