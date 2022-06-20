import { Col, Container, Row,Form } from "react-bootstrap";

function AddVote(){
    return <>
            <Container fluid className="main-height display-flex-main">
                        <form className="custom-form">
                            <h5 class="section-title">Add Vote</h5>
                            <Form.Group className="mb-3" controlId="token">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={4} type="text" placeholder="Description"/>
                            </Form.Group>
                            <div className="mt-4">
                            <button className="btn secondary-btn" type="button">
                                Publish
                            </button>
                            </div>
                        </form>
            </Container>
    </>
}
export default AddVote;