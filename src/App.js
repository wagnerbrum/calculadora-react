import React, { Component } from 'react';
import './App.css';
import Button from './componentes/Button';
import Led from './componentes/Led';

class App extends Component {
    render() {
        return (
            <div className="calculadora">
                <Led id="led" value={0} />
                <Button value="7" label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="AC" /> 
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="+" />                
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="-" />
                <Button label="0" />
                <Button label="/" />
                <Button label="." />
                <Button label="*" />
                <Button label="=" />
                
            </div>
        );
    }
}

export default App;
