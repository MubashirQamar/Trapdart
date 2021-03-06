import { Container } from "react-bootstrap"
import axios from 'axios'
import { useState } from "react"

function SecondSection()
{
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [isclick,setIsclick] = useState(false);
    const Subscribe = async (e) => {
        e.preventDefault();
        setIsclick(true);
        await axios.post(process.env.REACT_APP_SUBSCRIPTION_API_URL+'subscribe', {
            email:email,
        },{headers:{
            "Accept" : "application/json"
        }})
        .then(function (res) {
            setSuccess(res.data.message);
            setTimeout(() => {
            setSuccess('');
            }, 3000);
            setIsclick(false);
        })
        .catch(function (error) {
            setError(JSON.parse(error.request.response))
            setIsclick(false);
        });
    }
    return <>
    <section className="section">
        <Container>
        <div className="flex-title">
        <h2 className="section-title">trapdArt Token ($TRAP) Round 1 ICO<br/>Coming Soon</h2>
        </div>
        <div className="text-center white-paper-flex">
        <div className="white-paper-btn">
        <button className="custom-btn primary-btn">Read Whitepaper</button>
        </div>
        <form onSubmit={(e) => Subscribe(e)} >
        <div className="join-section">
            <p>Join our mailing list for the latest news</p>
            <div>
            <input className="custom-input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required  placeholder="Your email address"/>
            
            {
                error ? <p className="text-danger text-center">{error.email}</p> : success ? <p className="text-success">{success}</p> : ''
            }
            
            </div>
            <button className="custom-btn sm-secondary-btn" disabled={isclick ?  true: false}>{isclick ? 'Loading...' : 'Sign Up'}</button>
        </div>
        </form>
        </div>
        </Container>
    </section>
    </>
}

export default SecondSection