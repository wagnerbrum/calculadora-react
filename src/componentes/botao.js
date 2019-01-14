// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     // highlight-next-line
//     ReactDOM.render(element, document.getElementById('App'));
// }

// setInterval(tick, 1000);

import React, { Component } from 'react';
import estilo from './estilo.css';

class Botao extends Component {
    render() {
        return (
            <button 
            onClick={() => alert('Clicked')} 
            onBlur={() => console.log('Teste Blur')} 
            className={estilo.button} 

            >Click me</button>
        );
    }
}

export default Botao