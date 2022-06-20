import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { nft } from "../components/Images";
function Gallery() {


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
                                        <button className="custom-btn secondary-btn">Mint</button>
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
                                        <button className="custom-btn secondary-btn">Mint</button>
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
                                        <button className="custom-btn secondary-btn">Mint</button>
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
                                        <button className="custom-btn secondary-btn">Mint</button>
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
                                        <button className="custom-btn secondary-btn">Mint</button>
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
                                        <button className="custom-btn secondary-btn">Mint</button>
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