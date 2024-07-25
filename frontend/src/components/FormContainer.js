import { Container, Row, Col } from 'react-bootstrap';


function FormContainer ({children}) {
    return(
        <Container className="my-auto">
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}


export default FormContainer;