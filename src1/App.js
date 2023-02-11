import './App.css';
import { useState } from 'react';

const Person = (props) => {
    return (
        <>
            <h1>Name : {props.name} </h1>
            <h1>Last Name : {props.lastName}</h1>
            <h1>Age : {props.age}</h1>
        </>
    );
};

const App = () => {
    const name = null;
    const isNameShowing = true;

    return (
        <div className="App">
            <Person name="Isha" lastName="kaur" age="21" />
            <Person name="Jimmy" lastName="singh" age="35" />

            <h1>Hello {isNameShowing ? name : 'someone'} </h1>
            {name ? (
                <>{name}</>
            ) : (
                <>
                    <h1>test</h1>
                    <h2>resume at 30 min - Hooks with State</h2>
                </>
            )}
        </div>
    );
};

// resume at 26 min

export default App;
