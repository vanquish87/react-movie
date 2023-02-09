import './App.css';

const Person = () => {
    return
    <>
        <h1>Name : John</h1>;
        <h1>Last Name : John</h1>;
        <h1>Age : 32</h1>;
    </>
};

const App = () => {
    const name = null;
    const isNameShowing = true;

    return (
        <div className="App">
            <h1>Hello {isNameShowing ? name : 'someone'} </h1>
            {name ? (
                <>{name}</>
            ) : (
                <>
                    <h1>test</h1>
                    <h2>resume at 26 min</h2>
                </>
            )}
        </div>
    );
};

// resume at 26 min

export default App;
