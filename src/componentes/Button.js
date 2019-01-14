import React from 'react'
// import './Button.css'
 
export default (props) => 
    <button onClick={() => document.getElementById('led').value = props.value} className="button">{props.label}</button>