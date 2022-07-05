import { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { footerlogo } from '../components/Images'
function BuyTrap() {
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0.02);

    const increase = () => {

        if (qty < 100) {
            setQty(qty + 1)
        }
    };

    const decrease = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    };
    useEffect(()=>{
        setPrice(0.02 * qty)
    },[qty])
    return <>
        <main>
            <section className="section section-padding">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={footerlogo} className="token-img" />
                    </Col>
                    <Col lg={6}>
                        <div className="text-box text-center buy-trap-section">
                            <h4 >BUY $TRAP</h4>
                            <h5 >1 ETH = 50 $TRAP</h5>
                            <h5>{parseFloat(price.toFixed(3))} ETH</h5>
                            <div className="min-max">
                                <div class="increament">
                                    <div class="value-button decrease" id="decrease" value="Decrease Value" onClick={(e) => decrease()}>-</div>
                                    <input type="number" id="room-number" value={qty} min="1" max="20" class="number" onChange={(e) => setQty(e.target.value)} />
                                    <div class="value-button increase" id="increase" value="Increase Value" onClick={(e) => increase()}>+</div>
                                </div>
                            </div>
                            <button class="custom-btn secondary-btn">Buy $TRAP Token</button>
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    </>
}

export default memo(BuyTrap)