import { Col, Container, Row,Form } from "react-bootstrap";
import axios from 'axios'

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from 'web3modal';


function ListVote(){

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
            <Container fluid className="main-height">
                
                <Row className="gy-5 voting-main">
                    {proposalOBJ.map((arr, i) => {
                        return(
                    <Col lg={4}>
                    <div className="voting-box">
                            <h5 class="section-title">
                            {arr.title} 
                            </h5>
                            <div className="voting-list">
                                <div className="inner">
                                <h4>Up</h4>
                                <h5>{arr.total_passed}</h5>
                                </div>
                                <div className="inner">
                                <h4>Down</h4>
                                <h5>{(Number(arr.total_votes) - Number(arr.total_passed))}</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                      )
                    })}
                    
                </Row>

                        
            </Container>
    </>
}
export default ListVote;