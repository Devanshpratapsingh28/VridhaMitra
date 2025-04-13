import './button-solid.css'

function ButtonSolid(props){

    return (
        <>
            <div className="button-solid-box">
                <div className="button-solid-text">{props.props.text}</div>
            </div>
        </>
    )

    
}

export default ButtonSolid