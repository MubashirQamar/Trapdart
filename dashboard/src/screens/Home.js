import { Col, Container, Row,Form } from "react-bootstrap";

function Home(){
    return <>
            <Container fluid className="main-height display-flex-main">
                        <form className="custom-form">
                            <h5 class="section-title">Whitelist</h5>
                            <Form.Group className="mb-3" controlId="whitelist">
                                <Form.Label>Upload Whitelist</Form.Label>
                                <Form.Control type="file" />
                                <Form.Text className="text-muted">
                                Note: upload .xlsx file only.
                                </Form.Text>
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
export default Home;