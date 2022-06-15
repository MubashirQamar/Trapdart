import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap"
function Vote() {


    return <>
        <main>
            <section className="section ">
                <h2 className="second-title mt-5">Vote</h2>
                <div className="mt-5">
                <div className="text-box">
                    <p>TRAP token holders can participate in polls to direct the
                    development and progression of the trapdArt platform. Polls
                    are discussed amongst the community in the Telegram channel
                    - https://t.me/trapdArt</p>
                </div>
                </div>

                <div className="mt-5">
                <div className="text-box">
                    <p>Poll 2</p>
                    <ul className="vote-ul">
                        <li>
                            <span>Lorum ipsum Lorum ipsum Lorum ipsum</span>
                            <button className="custom-btn secondary-btn">Vote</button>
                        </li>
                        <li>
                            <span>Lorum ipsum Lorum ipsum Lorum ipsum</span>
                            <button className="custom-btn secondary-btn">Vote</button>
                        </li>
                        <li>
                            <span>Lorum ipsum Lorum ipsum Lorum ipsum</span>
                            <button className="custom-btn secondary-btn">Vote</button>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="mt-5">
                <div className="text-box">
                    <p>Poll 1</p>
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
                    <div>
                        <p>Result: Lorum ipsum Lorum ipsum </p>
                        <p>Action: Lorum ipsum Lorum ipsum  </p>

                    </div>
                </div>
                </div>
            </section>
        </main>
    </>
}

export default memo(Vote)