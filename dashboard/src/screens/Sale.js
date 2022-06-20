import { Col, Container, Row,Form } from "react-bootstrap";

function Sale(){
    return <>
            <Container fluid className="main-height display-flex-main">
                        <form className="custom-form">
                            <h5 class="section-title">Sale</h5>
                            <Form.Group className="mb-3" controlId="whitelist">
                                <label for="sale_type">Sale Type</label>
                                <select className="form-control" id="sale_type">
                                    <option value="">Token</option>
                                    <option value="">NFT</option>
                                    <option value="">Art Gallery</option>
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="whitelist">
                                <label for="type">Type</label>
                                <select className="form-control" id="type">
                                    <option value="">Start</option>
                                    <option value="">Stop</option>
                                </select>
                            </Form.Group>
                            <div className="mt-4">
                            <button className="btn secondary-btn" type="button">
                                Submit
                            </button>
                            </div>
                        </form>
            </Container>
    </>
}
export default Sale;