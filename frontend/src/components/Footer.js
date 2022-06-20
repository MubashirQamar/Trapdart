import { memo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/css/footer.css'
import { footerlogo } from './Images'
function Footer()
{
    return <footer>
        <Container>
            <div className='footer-first'>
            <Row>
                <Col lg={6}>
                    <h4>Stay in the loop</h4>
                    <p className='footer-p'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating trapDart.</p>
                    <div className='footer-join'>
                        <input className='form-control' placeholder='Your email address'/>
                        <button className='blue-btn'>Sign up</button>
                    </div>
                </Col>
                <Col lg={6}>
                    <h4>Join the community</h4>
                    <div className='social-links'>
                    <button className='blue-btn'><i class="fa-brands fa-twitter"></i></button>
                    <button className='blue-btn'><i class="fa-brands fa-instagram"></i></button>
                    <button className='blue-btn'><i class="fa-brands fa-discord"></i></button>
                    <button className='blue-btn'><i class="fa-brands fa-reddit-alien"></i></button>
                    <button className='blue-btn'><i class="fa-brands fa-youtube"></i></button>
                    <button className='blue-btn'><i class="fa-brands fa-tiktok"></i></button>
                    <button className='blue-btn'><i class="fa-solid fa-envelope"></i></button>
                    </div>
                </Col>
            </Row>
            </div>
            <Row>
                <Col lg={6}>
                    <div className="footer-logo-section">
                    <img src={footerlogo} />
                    <h4>trapDart</h4>
                    </div>
                    <p className='footer-p'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                </Col>
                <Col lg={3}>
                    <div className='footer-links-section'>
                    <h4>Artist</h4>
                    <ul>
                        <li>
                            <a href='#'>
                                Holders
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Voting
                            </a>
                        </li>
                    </ul>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='footer-links-section'>
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href='#'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Tokenomics
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Team
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                T&C's
                            </a>
                        </li>
                    </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default memo(Footer)