import { useEffect, useState } from "react"
import { Container, Card, Row, Col, CardHeader, CardBody, Button } from "reactstrap"
import TableReceipt from "../componentes/receipt/TableReceipt"
import ModalReceipt from "../componentes/receipt/ModalReceipt"

const App = () => {

    const [receipt, setReceipt] = useState([])
    const [coins, setCoins] = useState(null)
    const [documentTypes, setDocumentTypes] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [update, setUpdate] = useState(null)
   
    const getCoinsById = async (id) => {

        const response = await fetch(`api/coins/ListById/${id}`);
        if (response.ok) {
            const data = await response.json();
            return `${data.name} - ${data.code}`
        }

        return id
    }

    const getDocumentTypeById = async (id) => {

        const response = await fetch(`api/documentType/ListById/${id}`);
        if (response.ok) {
            const data = await response.json();
            return `${data.name}`
        }

        return id
    }

    const getReceipt = async () => {
        /**
        * GetAll service Receiptcontroller 
        * 
        * ** */
        const response = await fetch("api/receipt/List");
        if (response.ok) {
            const data = await response.json();
            const data2 = data.map(async (res) => {
                const idCoins = await getCoinsById(res.idCoins)
                const idDocumentType = await getDocumentTypeById(res.idDocumentType)

                return { ...res, idCoinsText: idCoins, idDocumentTypeText: idDocumentType }
            })
            Promise.all(data2).then((res) => setReceipt(res) )
            
        }
        else {
            console.error("Error getReceipt")
        }
    }

    //test
    const getCoins = async () => {
  
        const response = await fetch("api/coins/List");
        if (response.ok) {
            const data = await response.json();
            console.table("coins:",data)
            setCoins(data)
        }
        else {
            console.error("Error getReceipt")
        }
    }
 
    

    //test
    const getDocumentType = async () => {

        const response = await fetch("api/documentType/List");
        if (response.ok) {
            const data = await response.json();
            console.table("documentType:", data)
            setDocumentTypes(data)
        }
        else {
            console.error("Error getReceipt")
        }
    }

    useEffect(() => {
        getReceipt();
        getCoins();
        getDocumentType();
    }, [])

    const saveReceipt = async (receipt) => {
        /**
         * Create service Receiptcontroller 
         * 
         * ** */
        console.log("saveReceipt:", receipt)
        if (receipt.idCoins !== null ||
            receipt.amount !== null ||
            receipt.idDocumentType !== null ||
            receipt.idCoins !== null) {
            const response = await fetch("api/receipt/Save", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(receipt)
            });
            if (response.ok) {
                setShowModal(!showModal);
                getReceipt();
            } else {
                console.error("Error saveReceipt")
            }
        }
    }

    const updateReceipt = async (receipt) => {
        /**
        * Update service Receiptcontroller 
        * 
        * ** */
        console.log("updateReceipt:", receipt)
        const response = await fetch("api/receipt/Update", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(receipt)
        });
        if (response.ok) {
            setShowModal(!showModal);
            getReceipt();
        } else {
            console.error("Error updateReceipt")
        }
    }

    const deleteReceipt = async (id) => {
        /**
       * Delete service Receiptcontroller 
       * 
       * ** */
        console.log("deleteReceipt:", id)
        var result = window.confirm("Desea eliminar el contacto?")
        if (!result) {
            return;
        }

        const response = await fetch("api/receipt/Delete/" + id, {
            method: "DELETE",
        });
        if (response.ok) {
            getReceipt();
        } else {
            console.log("Error deleteReceipt")
        }
    }

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h2
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                >Lista Recibo</h2>
                            </CardHeader>
                            <CardBody>
                                <Button size="sm" color="success" onClick={() => setShowModal(!showModal)}>Nuevo Recibo</Button>
                                <hr></hr>
                                <TableReceipt
                                    data={receipt}
                                    setUpdate={setUpdate}
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    deleteReceipt={deleteReceipt}
                                    getCoinsById={getCoinsById}
                                >
                                    
                                </TableReceipt>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <ModalReceipt
                    showModal={showModal}
                    setShowModal={setShowModal}
                    saveReceipt={saveReceipt}
                    update={update}
                    setUpdate={setUpdate}
                    updateReceipt={updateReceipt}
                    coins={coins}
                    documentTypes={documentTypes }
                ></ModalReceipt>
            </Container>
        </>
    )
}

export default App;