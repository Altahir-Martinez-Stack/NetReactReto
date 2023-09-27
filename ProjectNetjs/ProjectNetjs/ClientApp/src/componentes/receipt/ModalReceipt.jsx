
import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';

const modeloReceipt = {
    id: 0,
    idCoins: "",
    amount: "",
    title: "",
    description: "",
    address: "",
    fullName: "",
    idDocumentType: "",
    idUsers: 1
}

const ModalReceipt = ({ showModal, setShowModal, saveReceipt, update, setUpdate, updateReceipt }) => {

    const [receipt, setReceipt] = useState(modeloReceipt)

    const updateData = (e) => {
        //console.log(e.target.name + " : " + e.target.value)
        setReceipt(
            {
                ...receipt,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSelectChange = ({ value }) => {
        console.log(value)
    }


    const sendData = () => {
        if (receipt.id === 0) {
            saveReceipt(receipt)
        } else {
            updateReceipt(receipt)
        }
        setReceipt(modeloReceipt)
    }

    useEffect(() => {
        if (update != null) {
            setReceipt(update)
        } else {
            setReceipt(modeloReceipt)
        }
    }, [update])

    const hideModel = () => {
        setShowModal(!showModal) 
        setUpdate(null)
    }


    return (
        <>
            <Modal isOpen={showModal }>
                <ModalHeader>
                    {receipt.id === 0 ? " Nuevo Recibo" : "Editar Recibo"}
                   
                </ModalHeader>
                <ModalBody>
                    <Form>
                        {/*<FormGroup>*/}
                        {/*    <Label for="exampleSelect">*/}
                        {/*        Type de moneda*/}
                        {/*    </Label>*/}
                        {/*    <Input*/}
                        {/*        options={ }*/}
                        {/*        onChange={handleSelectChange}*/}
                        {/*    >*/}
                        {/*    </Input>*/}
                        {/*</FormGroup>*/}
                        <FormGroup>
                            <Label>Tipo de moneda</Label>
                            <Input type="number" name="idCoins" onChange={(e) => updateData(e)} value={receipt.idCoins}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Monto</Label>
                            <Input type="number" name="amount" onChange={(e) => updateData(e)} value={receipt.amount}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Titulo</Label>
                            <Input name="title" onChange={(e) => updateData(e)} value={receipt.title}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Descripcion</Label>
                            <Input name="description" onChange={(e) => updateData(e)} value={receipt.description}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Direccion</Label>
                            <Input name="address" onChange={(e) => updateData(e)} value={receipt.address}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input name="fullName" onChange={(e) => updateData(e)} value={receipt.fullName}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Tipo de documento</Label>
                            <Input type="number" name="idDocumentType" onChange={(e) => updateData(e)} value={receipt.idDocumentType}></Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size="sm" onClick={sendData} >{receipt.id === 0 ? "Guardar" : "Editar"}</Button>
                    <Button color="danger" size="sm" onClick={hideModel}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalReceipt;