import { useContext, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import TableReceipt from "../componentes/receipt/TableReceipt";
import ModalReceipt from "../componentes/receipt/ModalReceipt";
import { ContextModal } from "../context/contextModal";
import { ContextListReceipt } from "../context/contextListReceipt";

const App = () => {
  const { changeShowModal } = useContext(ContextModal);
  const { getRefetch } = useContext(ContextListReceipt);

  // const deleteReceipt = async (id) => {
  //   /**
  //    * Delete service Receiptcontroller
  //    *
  //    * ** */
  //   console.log("deleteReceipt:", id);
  //   var result = window.confirm("Desea eliminar el contacto?");
  //   if (!result) {
  //     return;
  //   }

  //   const response = await fetch("api/receipt/Delete/" + id, {
  //     method: "DELETE",
  //   });
  //   if (response.ok) {
  //     getRefetch();
  //   } else {
  //     console.log("Error deleteReceipt");
  //   }
  // };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col sm="12">
            <Card>
              <CardHeader>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Lista Recibo
                </h2>
              </CardHeader>
              <CardBody>
                <Button size="sm" color="success" onClick={changeShowModal}>
                  Nuevo Recibo
                </Button>
                <hr></hr>
                <TableReceipt></TableReceipt>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalReceipt></ModalReceipt>
      </Container>
    </>
  );
};

export default App;
