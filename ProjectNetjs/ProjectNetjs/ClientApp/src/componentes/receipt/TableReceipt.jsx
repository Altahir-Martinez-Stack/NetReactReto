
import { Table, Button } from "reactstrap"
import { Link } from 'react-router-dom';

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
                        <th>Tipo de documento</th>
                        <th>Tipo de moneda</th>
                        <th>Monto</th>
                        <th>Titulo</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length < 1) ? (
                            <tr>
                                <td colSpan="8">Cargando</td>
                            </tr>
                        ) : (
                                data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.idDocumentTypeText}</td>
                                        <td>{item.idCoinsText}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.title}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.description}</td>
                                     
                                        <td>
                                            <Button color="primary" size="sm" className="me-2" onClick={() => sendData(item) }>Editar</Button>
                                            <Button color="danger" size="sm" className="me-2" onClick={() => deleteReceipt(item.id)}>Eliminar</Button>
                                            <Link to="/Pdf" state={item } >  <Button color="warning" size="sm" className="me-2">PDF</Button> </Link>  
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