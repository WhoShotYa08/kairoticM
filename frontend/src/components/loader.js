import { Spinner } from "react-bootstrap";

const Loader = () =>{
    return(
        <Spinner
            animation="border"
            role="status"
            style={{
                width: '90px',
                height: '90px',
                margin: 'auto auto',
                display: 'block',
                position: 'absolute'
            }}
        />
    )
}

export default Loader;