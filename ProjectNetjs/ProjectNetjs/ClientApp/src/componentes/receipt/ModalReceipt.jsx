import { useContext } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
  Button,
} from "reactstrap";
import { useListCoin } from "../../hooks/useListCoin";
import { useListDocumentType } from "../../hooks/useListDocumentType";
import { useCreatedReceipt } from "../../hooks/useCreatedReceipt";
import { ContextModal } from "../../context/contextModal";
import { useUpdatedReceipt } from "../../hooks/useUpdatedReceipt";
import { useFormReceipt } from "../../hooks/useFormReceipt";

const ModalReceipt = ({}) => {
  const { coins } = useListCoin();
  const { documentTypes } = useListDocumentType();
  const { showModal } = useContext(ContextModal);
  const { receiptForm, hideModel, sendData, updateData } = useFormReceipt();

  return (
    <>
      <Modal isOpen={showModal}>
        <ModalHeader>
          {receiptForm.id === 0 ? " Nuevo Recibo" : "Editar Recibo"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Tipo de documento</Label>
              <Input
                id="exampleSelect"
                name="idDocumentType"
                type="select"
                value={receiptForm.idDocumentType}
                onChange={(e) => updateData(e)}
              >
                {documentTypes?.map((documentType) => (
                  <option key={documentType.id} value={documentType.id}>
                    {documentType.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Tipo de Moneda</Label>
              <Input
                id="exampleSelect"
                name="idCoins"
                type="select"
                value={receiptForm.idCoins}
                onChange={(e) => updateData(e)}
              >
                {coins?.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.code} - {coin.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Monto</Label>
              <Input
                type="number"
                name="amount"
                onChange={(e) => updateData(e)}
                value={receiptForm.amount}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Titulo</Label>
              <Input
                name="title"
                onChange={(e) => updateData(e)}
                value={receiptForm.title}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                name="fullName"
                onChange={(e) => updateData(e)}
                value={receiptForm.fullName}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Dirección</Label>
              <Input
                name="address"
                onChange={(e) => updateData(e)}
                value={receiptForm.address}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Descripción</Label>
              <Input
                name="description"
                onChange={(e) => updateData(e)}
                value={receiptForm.description}
              ></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" size="sm" onClick={sendData}>
            {receiptForm.id === 0 ? "Guardar" : "Editar"}
          </Button>
          <Button color="danger" size="sm" onClick={hideModel}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalReceipt;
