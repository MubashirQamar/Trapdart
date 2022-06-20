import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { logo } from "../components/Images";
function About() {


    return <>
        <main>
            <Container>
                <section className="banner-section about-page">
                    <div className="banner-inner">
                        <img src={logo} />
                        <div className="text">
                            <p>Unleashing trapped digital art into the wild.</p>
                            <p>A boutique art gallery and marketplace focused on<br />
                                giving the freshest digital artists a place to shine.</p>
                        </div>
                        <div className="text">
                            <p >trapdArt is an exciting new platform which invites the
                                freshest artistic talent into the limelight and is backed
                                by a blockchain ecosystem that rewards $TRAP token
                                holders with early access to hand-picked, up-and-coming
                                art releases. trapdArt will act as a hub for digital artwork
                                whilst straying away from generative NFTs that have
                                been so dominant in previous years. trapdArt will be
                                community driven allowing token holders to vote on
                                platform progression and artist selection.</p>
                            <button className="custom-btn primary-btn">Read Whitepaper</button>
                        </div>
                        {/* vission text */}
                        <div className="mt-5">
                            <h3 className="second-title">Vision</h3>
                            <div className="text">
                                <p >We believe that the world has gone crazy for NFTs in a trend
                                    that sees people trading artwork based on randomised rare
                                    attributes rather that pure artistic talent.</p>
                                <p>
                                    We envisage the future with homes plastered in digital art+
                                    work. Screen technology will become increasingly cheaper to
                                    purchase and smart home systems more widely adopted.
                                </p>
                                <p>
                                    Digital art at home should be accessible for all and trapdArt
                                    will allow both serious art collectors and technology enthu+
                                    siasts alike a platform to gain access to the most exciting
                                    artists that have yet to breakthrough into the scene.
                                </p>
                            </div>
                        </div>
                        {/* end vission text */}
                        {/* goals text */}
                        <div className="mt-5">
                            <h3 className="second-title">Goals</h3>
                            <div className="text">
                                <p>o To provide a platform for up-and-coming artists to have
                                    their artwork seen and acknowledged. Initially digital, art
                                    releases will develop into physical pieces such as paintings
                                    and sculptures with blockchain verification using accompa+
                                    nying NFTs.</p>
                            </div>
                            <div className="text">
                                <p>o To give investors the opportunity to get early access to
                                    hand-picked up-and-coming artist.</p>
                            </div>
                            <div className="text">
                                <p>o To be a common name alongside other major digital art
                                    and NFT platforms such as Opensea and Nifty Gateway.</p>
                            </div>
                        </div>
                        {/* end goals text */}
                        <div className="mt-5">
                            <h3 className="second-title">What makes us different?</h3>
                            <div className="text">
                                <p>Opensea and Nifty Gateway are huge names within the
                                    crypto community but as with all marketplaces and galleries
                                    there is always room for more. We believe in quality not
                                    quantity and all NFT releases through our platform will be
                                    carefully planned, working with the selected artists.</p>
                            </div>
                        </div>
                        {/* artist text  */}
                        <div className="mt-5">
                            <h3 className="second-title">Artists</h3>
                            <div className="text">
                                <p>trapdArt will showcase artists who will be selected by two main methods:</p>
                                <div className="about-ol-section">
                                    <ol >
                                        <li>Headhunting artists on twitter, word of mouth,
                                            exhibitions etc.</li>
                                        <li>
                                            Selection  artists will be able to request to be
                                            featured on the website. All artist requests will be
                                            reviewed and selected by:
                                            <ul>
                                                <li>Our team of art experts.</li>
                                                <li>Community, using the tokens voting feature.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="text">
                                <p>All artists featured on the website will reflect trapdArt’s high
                                    level of excellence in line with the brand’s standard.</p>
                            </div>
                        </div>
                        {/* end artist text  */}
                        {/*  revenue text  */}
                        <div className="mt-5">
                            <h3 className="second-title">Revenue</h3>
                            <div className="text">
                                <p>Artists will be able to sell their art directly through the web+
                                    site with tradArt taking a percentage of the price as a sales
                                    fee. Percentage will vary for each artist/piece on a
                                    case-by-case basis. Art will be priced in either ETH or
                                    USDT as per the artist’s request. The artist can receive their
                                    percentage in either the sales currency (ETH or USDT). Tu+
                                    torials will be provided on how to handle cryptocurrencies, if
                                    required.</p>
                                <p>
                                    All generated revenue will be used to grow the platform. The
                                    direction of progression will be discussed within the com+
                                    munity and voted on by token holders using the website’s
                                    voting portal. Off-chain polls will take place where only
                                    token holders can participate. Voting power will be weighted
                                    by token holding amount.
                                </p>
                            </div>
                        </div>
                        {/* end revenue text  */}

                    </div>
                </section>
            </Container>
        </main>
    </>
}

export default memo(About)