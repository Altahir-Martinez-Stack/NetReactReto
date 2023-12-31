﻿import { useEffect, useState } from "react"
import { Container, Card, Row, Col, CardHeader, CardBody, Button } from "reactstrap"
import TablaUsers from "../componentes/users/TablaUsers"
import RegisterUsers from "../componentes/users/RegisterUsers"

const Users = () => {

    const [modalRegistrar, setModalRegistrar] = useState(false);
    const [modeEdit, setModeEdit] = useState({
        status: false,
        payload: {
            name: ""
        }
    })
    const toogleRegister = () => {

        setModalRegistrar(!modalRegistrar)
    }
    const tootgleModeEdit = (user) => {

        setModeEdit({ payload: user, status: !modeEdit.status })
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >Lista de Usuarios</h5>
                            </CardHeader>
                            <CardBody>
                                <Button size="sm" color="success" onClick={toogleRegister}>Nuevo Usuario</Button>

                                <hr></hr>
                                <TablaUsers toogleModal={toogleRegister} toogleEdit={tootgleModeEdit} ></TablaUsers>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
            <RegisterUsers toggle={toogleRegister} modal={modalRegistrar} modeEdit={modeEdit} />
        </>
    )
}

export default Users;