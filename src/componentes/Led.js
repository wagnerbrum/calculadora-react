import React from 'react'
import './Led.css'
 
export default props =>
    <div id={props.id} className="led"> {props.value} </div>