import { Container, Row } from "react-bootstrap"
import { nft } from "./Images"

function RoundSection()
{
    return <>
    <section className="section section-padding">
        <Container>
        <h2 className="second-title">Free exclusive NFT art giveaway - Eligiblity<br/>
given to participants of each ICO round</h2>

        <div className="round-main text-center">
            <div className="round-box text-center">
                <div className="inner">
                <p className="normal-text">Round 1</p>
                <img src={nft} className="nft-image"/>
                </div>
                <div className="inner">
                <p className="normal-text">Round 2</p>

                <img src={nft} className="nft-image"/>
                </div>
                <div className="inner">
                <p className="normal-text">Round 3</p>
                <img src={nft} className="nft-image"/>
                </div>
            </div>
                <p className="normal-text">NFT mintable at the end of each ICO round</p>
        </div>
        </Container>
    </section>
    </>
}

export default RoundSection