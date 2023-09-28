import { Table, Button } from "reactstrap"
import { useListUser } from "../../hooks/useListUser";

const TablaUsers = ({ toogleModal, toogleEdit }) => {
    const { users,
        loading,
        error } = useListUser()

    if (error) return (<span> Error </span>)

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Tipo de Usuario</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? (
                       <tr>
                           <td colSpan="4"> Cargando... </td>
                        </tr>
                    ) : (
                            users && users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.idTypeUser}</td>
                                <td>
                                        <Button color="primary" size="sm" className="me-2" onClick={() => {
                                            toogleEdit(user)
                                            toogleModal()
                                        }} >Editar</Button>
                                    <Button color="danger" size="sm">Eliminar</Button>
                                </td>
                            </tr>
                        )))
                    
                }
            </tbody>
        </Table>
    )
}

export default TablaUsers;