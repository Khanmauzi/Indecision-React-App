import React from 'react'
const Option = (props) => {
    return (
        <div className="option">
         <p className="option__text">{props.count}. {props.option}</p>   
            <button  className="button button--link" onClick={(event) => {
                props.handledeleteOption(props.option)
            }}>Remove</button>
        </div>
    )
}
export default Option;