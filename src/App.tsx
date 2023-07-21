import './App.css';
import styled from 'styled-components';
import {Button} from "./Button/Button";

function App() {
    return (
        <div className="App">
            <Button iconId="cat" style ={{backgroundColor: 'rgb(229, 169, 247)'}}/>
        </div>
    );
}

export default App;