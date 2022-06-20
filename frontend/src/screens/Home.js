import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Banner, RoadMap, RoundSection, SecondSection } from "../components";
function Home() {
 

    return <>
        <main>
         <Banner/>
         <SecondSection/>
         <RoundSection/>
         <section className="section section-padding">
             <div className="text-center whitelist">
             <p className="normal-text">Whitelist entries for discounted Round 1 of ICO now OPEN:</p>
             <p className="normal-text">1. Follow @trapdArt on Twitter</p>
             <p className="normal-text">2. Retweet our Tweet</p>
             <p className="normal-text">3. Like our Tweet</p>
             <p className="normal-text">4. Tag 2 friends in the comments</p>
             <p className="normal-text">5. Join Telegram chanel</p>
             <p className="normal-text">6. DM your ETH address</p>
             <div className="mt-5">
             <p className="normal-text">You will get:</p>
             <p className="normal-text">1. 40% discount on token price.</p>
             <p className="normal-text">2. Eligibility to mint our exclusive round 1 launch art NFT. </p>
             <p className="normal-text">3. TRAP token holders get early access to latest NFT.</p>
             <p className="normal-text mt-5">Three rounds in total. Full details of ICO in Whitepaper.</p>
             </div>
             </div>
         </section>
         <RoadMap/>
        </main>
    </>
}

export default memo(Home)