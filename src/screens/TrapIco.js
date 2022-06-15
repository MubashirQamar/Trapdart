import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { allocation } from "../components/Images";
function TrapIco() {


    return <>
        <main>
            <section className="section ">
                <h2 className="second-title mt-5">$TRAP ICO</h2>
                <div className="mt-5">
                    <div className="text-box">
                        <p>The TRAP token will be distributed by three rounds of initial
                            coin offereing.</p>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="text-box">
                        <p>Round 1 open to whitelisted wallets NOW!</p>
                        <p>1. Follow @trapdArt on Twitter<br />
                            2. Retweet our Tweet<br />
                            3. Like our Tweet
                            <br />
                            4. Tag 2 friends in the comments
                            <br />
                            5. Join Telegram chanel
                            <br />
                            6. DM your ETH address
                            <br />
                        </p>
                        <p>You will get:</p>
                        <p>1. 40% discount on token price.
                            <br />
                            2. Eligibility to mint our exclusive round 1 launch art NFT.
                            <br />
                            3. TRAP token holders get early access to latest NFT.
                        </p>
                        <ul className="buy-ul">
                            <li>
                                <p>
                                    Round 1 - Whitelist only - Coming soon
                                </p>
                                <div>
                                    <input className="form-control" placeholder="Your ETH address" />
                                    <button className="custom-btn secondary-btn">Buy</button>
                                </div>
                            </li>
                            <li>
                                <p>
                                    Round 2 - Coming soon
                                </p>
                                <div>
                                    <input className="form-control" placeholder="Your ETH address" />
                                    <button className="custom-btn secondary-btn">Buy</button>
                                </div>
                            </li>
                            <li>
                                <p>
                                    Round 3 - Coming soon
                                </p>
                                <div>
                                    <input className="form-control" placeholder="Your ETH address" />
                                    <button className="custom-btn secondary-btn">Buy</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-box">
                        <h2 className="second-title">ICO Details</h2>
                        <p>
                            The ICO is designed to reward early investors with cheaper token
                            prices and to also increase token holders by rewarding participants from the first two rounds who buy any number of tokens
                            with the option to mint an exclusive NFT - this aims to self-market
                            trapdArt by word of mouth. The ICO NFT’s will be used in early
                            marketing on Twitter and other social media outlets.
                        </p>
                        <p>
                            All token prices below are multipliers of future selected ICO price.
                        </p>
                        <p>Round 1 (2 weeks, capped at 10% of token supply): Token price
                            = 0.6. Whitelist only. Open to twitter accounts who have liked,
                            retweeted and tagged two friends. All participants who buy
                            tokens (any amount) will get access to mint an NFT (gas charge
                            only – no fee). The NFT will be the same for all participants and
                            have an unlimited supply, but minting will stop at the end of the
                            round.</p>
                        <p>
                            Round 2 (3 weeks, capped at 10% of token supply): Token price
                            = 0.8. Open to anyone. All participants who buy tokens (any
                            amount) will get access to mint an NFT (gas charge only – no
                            fee). The NFT will be the same for all participants and have an unlimited supply, but minting will stop at the end of the round.

                        </p>
                        <p>
                            Round 3 (3 weeks, capped at 20% of token supply): Token price
                            = 1. Open to anyone. All participants who buy a minimum number
                            of tokens will get access to mint an NFT (gas charge only – no
                            fee). The NFT will be the same for all participants and have an unlimited supply, but minting will stop at the end of the round.
                        </p>
                        <p>
                            At the end of the three rounds, a percentage of the ether collected will be pooled with additional tokens to give liquidity on Uniswap (0% tax on buys/sells). The number of tokens will be
                            chosen to give a token value of 1 (the same as the third round of
                            ICO (to discourage dumping). Depending on how successful the
                            crowd sale is, excess tokens may be burned to bring the supply
                            down.
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-box text-start">
                        <h2 className="second-title">Token Allocation</h2>
                        <p>A total maximum supply of 88,888,888 TRAP tokens will be
                            minted with no option to mint further tokens.</p>
                        <p>
                            • 10% of tokens will be withheld by trapdArt founders and will
                            be locked for 1 year from launch then released slowly over 2
                            years.<br />
                            • 10% of tokens will be withheld to onboard artists for launch
                            and will aim to be locked for 1 year from launch then released
                            slowly over 2 years. However, terms will be discussed with each
                            artist individually.
                            <br />
                            • 8% of tokens will be available immediately by trapdArt for development of the platform.
                            <br />
                            • Up to 40% of tokens will be available during the ICO. 80% of
                            the ether raised during ICO sales will be matched with remaining
                            TRAP tokens (32%) to create Uniswap liquidity. The remaining
                            20% of ether from ICO sales will be used towards initial development.
                            <br />
                            • The fate of any remaining tokens will be decided by community
                            vote using the website voting portal with options to burn or use
                            for platform development.
                        </p>
                        <div className="text-center">
                        <img src={allocation} className="allocation-img"/>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default memo(TrapIco)