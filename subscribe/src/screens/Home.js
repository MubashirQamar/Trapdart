import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Banner, SecondSection } from "../components";
function Home() {
 

    return <>
        <main>
         <Banner/>
         <SecondSection/>
        </main>
    </>
}

export default memo(Home)