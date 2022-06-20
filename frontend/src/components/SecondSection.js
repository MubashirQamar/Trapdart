import { Container } from "react-bootstrap"

function SecondSection()
{
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
        <div className="text-center white-paper-flex">
        <button className="custom-btn primary-btn">Read Whitepaper</button>
        <div className="join-section">
            <p>Join our mailing list for the latest news</p>
            <input className="custom-input" placeholder="Your email address"/>
        </div>
        </div>
        </Container>
    </section>
    </>
}

export default SecondSection