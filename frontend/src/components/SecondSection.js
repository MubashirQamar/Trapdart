import { Container } from "react-bootstrap"
import axios from 'axios'
import { useState } from "react"

function SecondSection()
{
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    
    const Subscribe = async (e) => {
        e.preventDefault();
      
    }
    return <>
    <section className="section">
        <Container>
        <div className="flex-title">
        <h2 className="section-title">trapdArt Token ($TRAP) Round 1 ICO<br/>Coming Soon</h2>
        </div>
        <div className="timer-section">
            <p>COUNTDOWN</p>
            <div className="counter">
                <div className="inner">
                    <h3>02</h3><sub>HOUR</sub>
                </div>
                <div className="inner">
                    <h3>00</h3><sub>MIN</sub>
                </div>
                <div className="inner">
                    <h3>00</h3>
                </div>
            </div>
        </div>
        <form onSubmit={(e) => Subscribe(e)} >
        <div className="text-center white-paper-flex">
        <button className="custom-btn primary-btn">Read Whitepaper</button>
        <div className="join-section">
            <p>Join our mailing list for the latest news</p>
            <div>
            <input className="custom-input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Your email address"/>
            </div>
        </div>
        </div>
        </form>
        </Container>
    </section>
    </>
}

export default SecondSection