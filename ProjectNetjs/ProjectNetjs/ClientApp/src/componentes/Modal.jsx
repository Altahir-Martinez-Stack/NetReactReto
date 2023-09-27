
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalTemplate(args) {

    return (

        <Modal isOpen={args.modal} toggle={args.toggle} >
            <ModalHeader toggle={args.toggle}>Modal title</ModalHeader>
            <ModalBody>
                {args.children}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={args.toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={args.toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>

    );
}

export default ModalTemplate;