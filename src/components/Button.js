import React from 'react'


const Button = (props) => {
    return (
        <div>
            <input type="button" value={props.value} className={props.className} onClick={props.onClick}/>
        </div>
    )
}



export default Button;
