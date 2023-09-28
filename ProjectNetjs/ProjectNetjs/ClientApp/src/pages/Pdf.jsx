import { jsPDF } from "jspdf";
import { Container, Card, Row, Col, CardHeader, CardBody, Button, CardFooter } from "reactstrap"
import { useLocation, Link } from "react-router-dom";

function Pdf() {

    const {state } = useLocation()
    console.log("RUTA PDF", state)
    const receipt = {
        DocumentType: state.idDocumentType,
        number: '123456',
        moneda: state.idCoins,
        monto: state.amount,
        fecha: '2023-01-01',
        cliente: state.fullName,
        email: state.address,
    }

    const generatePDF = () => {
        const doc = new jsPDF();

        //
        doc.text('Boleta', 95, 20);
        doc.text(`Numero de boleta : ${receipt.number}`, 10, 30);
        doc.text(`Fecha : ${receipt.fecha}`, 10, 40);
        doc.text(`Cliente : ${receipt.cliente}`, 10, 50);
        doc.text(`Moneda : ${receipt.moneda}`, 10, 60);
        doc.text(`Monto : ${receipt.monto}`, 10, 70);

        //
        doc.save(`botela_${receipt.number}.pdf`);
    }

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h1 style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>Vista Previa</h1>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <h1>Boleta</h1>
                                    <h4>Aqui va el logo</h4>
                                    <p>Numero de boleta :{receipt.number} </p>
                                    <p>Fecha : {receipt.fecha}</p>
                                    <p>Cliente : {receipt.cliente}</p>
                                    <p>Moneda : {receipt.moneda}</p>
                                    <p>Monto :{receipt.monto} </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Link to="/Receipt">  <Button color="danger" size="sm" className="me-2" >Volver</Button> </Link>  
                                <Button size="sm" color="success" onClick={generatePDF}> Generar PDF</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
          
        </>
    )
}

export default Pdf;