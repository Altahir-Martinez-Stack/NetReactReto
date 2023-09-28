
import ModalTemplate from './Modal';

function RegisterUsers(args) {
    console.log("modeEdit", args.modeEdit)
    return (

        <ModalTemplate {...args}>
            <>
                {
                    args.modeEdit && (
                        <h1> {args?.payload?.name} </h1>
                    )
                }
            </>
            
        </ModalTemplate>
       
    );
}

export default RegisterUsers;