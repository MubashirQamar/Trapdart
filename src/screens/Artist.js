import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { unkown } from "../components/Images";
function Artist() {


    return <>
        <main>
            <section className="section ">
                <h2 className="second-title mt-5">Artists</h2>
                <div className="mt-5">
                <div className="text-box">
                    <p>All interested artists please contact <a href="mailto:info@trapdart.com" className="normal-a">info@trapdart.com</a></p>
                </div>
                </div>
                <div className="mt-5">
                <div className="text-box">
                    <p>Artist Profile 1</p>
                    <img src={unkown} className="artist-img"/>
                    <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum<br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    </p>
                </div>
                </div>
                <div className="mt-5">
                <div className="text-box">
                    <p>Artist Profile 2</p>
                    <img src={unkown} className="artist-img"/>
                    <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum<br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                    <br/>
                    </p>
                </div>
                </div>
            </section>
        </main>
    </>
}

export default memo(Artist)