import { Col, Container, Row,Form } from "react-bootstrap";
import axios from 'axios'
import  {create as ipfsHttpClient}  from 'ipfs-http-client'; 
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from 'web3modal';

function AddVote(){

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

    //  title , ipfs , description , proposer  

      const [title , setTitle] = useState()
      const [description , setDescription] = useState()
      const [proposer , setProposer] = useState()
      const [imageURL, setImageURL] = useState() 
      const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0') 

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

      const handleChange= async(e)=> { 
        try {

            let [file]  =  e.target.files; 
            console.log("file",file) 
            const added = await client.add(e.target.files[0]) 
            let URL = `https://opensea.mypinata.cloud/ipfs/${added.path}` 
            setImageURL(URL) 
            console.log(URL) 

        } catch (error) {
            console.log("handleChange :: screen addVote : " , error )
        }

       
        } 

    const sig = async () => { 
          let signer = await loadProvider() 
          let message = "Add the proposal"
            let s = await signer.signMessage(message) 
            return s             
            }


      const addProposal = async ()=>{
        try {
            if(title && description && imageURL){
            let signature = await sig()
            const add  = await axios({

                method: 'post',
                url: `${process.env.REACT_APP_BSE_API_URL}/proposals`,
                data : {
                    title: title,
                    ipfs: imageURL,
                    description : description,
                    signature : signature
                }

              });

            }


        } catch (error) {
            console.log("addProposal :: screen addVote :",error)
        }
      } 

    return <>
            <Container fluid className="main-height display-flex-main">
                        <form className="custom-form">
                            <h5 class="section-title">Add Vote</h5>
                            <Form.Group className="mb-3" controlId="whitelist">
                                <Form.Label >Upload Image</Form.Label>
                                <Form.Control type="file"  onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                Note: upload picture.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tilte">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Token ID" onChange={(e)=> setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="token">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={4} type="text" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
                            </Form.Group>
                            
                            <div className="mt-4">
                            <button className="btn secondary-btn" type="button" onClick={addProposal}>
                                Publish
                            </button>
                            </div>
                        </form>
            </Container>
    </>
}
export default AddVote;