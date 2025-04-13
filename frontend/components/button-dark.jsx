import './button-dark.css'

function ButtonDark(props){

    return (
        <>
            <div className="button-dark-box">
                <div className="button-dark-text">{props.props.text}</div>
            </div>
        </>
    )

    
}

export default ButtonDark