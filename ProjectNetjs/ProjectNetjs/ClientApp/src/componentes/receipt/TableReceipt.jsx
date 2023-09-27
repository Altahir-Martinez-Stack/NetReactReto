
import { Table, Button } from "reactstrap"

const TableReceipt = ({ data, setUpdate, showModal, setShowModal, deleteReceipt }) => {

    const sendData = (receipt) => {
        setUpdate(receipt)
        setShowModal(!showModal)
    }

    return (
        <>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Tipo de moneda</th>
                        <th>Monto</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Direccion</th>
                        <th>Nombre</th>
                        <th>Tipo de documento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length < 1) ? (
                            <tr>
                                <td colSpan="5"> Sin registro</td>
                            </tr>
                        ) : (
                                data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.idCoins}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.address}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.idDocumentType}</td>
                                        <td>
                                            <Button color="primary" size="sm" className="me-2" onClick={() => sendData(item) }>Editar</Button>
                                            <Button color="danger" size="sm" className="me-2" onClick={() => deleteReceipt(item.id)}>Eliminar</Button>
                                            <Button color="warning" size="sm" className="me-2" onClick={() => sendData(item)}>PDF</Button>
                                        </td>
                                    </tr>
                                ))
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TableReceipt;