import React from 'react';
import ReactDOM from 'react-dom'
import Nav from './js/nav'
import Main from './js/main'
import Articles from "./js/articles";

function App() {
    return (
        <div>
            <Nav />
            <Main />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))


