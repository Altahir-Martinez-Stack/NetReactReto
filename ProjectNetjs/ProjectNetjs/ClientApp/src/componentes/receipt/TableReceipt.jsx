import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextListReceipt } from "../../context/contextListReceipt";
import { ContextModal } from "../../context/contextModal";
import { useDeletedReceipt } from "../../hooks/useDeletedReceipt";

const TableReceipt = () => {
  const { receipt, loading, error } = useContext(ContextListReceipt);
  const { sendReceiptEdit } = useContext(ContextModal);
  const deleted = useDeletedReceipt();

  if (error) return <span>Error...</span>;

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
          {loading ? (
            <tr>
              <td>Cargando...</td>
            </tr>
          ) : (
            receipt?.map((item) => (
              <tr key={item.id}>
                <td>{item.idDocumentTypeText}</td>
                <td>{item.idCoinsText}</td>
                <td>{item.amount}</td>
                <td>{item.title}</td>
                <td>{item.fullName}</td>
                <td>{item.address}</td>
                <td>{item.description}</td>

                <td>
                  <Button
                    color="primary"
                    size="sm"
                    className="me-2"
                    onClick={() => sendReceiptEdit(item)}
                  >
                    Editar
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    className="me-2"
                    onClick={() => deleted(item.id)}
                  >
                    Eliminar
                  </Button>
                  <Link to="/Pdf" state={item}>
                    {" "}
                    <Button color="warning" size="sm" className="me-2">
                      PDF
                    </Button>{" "}
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableReceipt;
