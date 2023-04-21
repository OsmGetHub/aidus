import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Nav from "./js/nav"
import InfoPerosonnels from "./profile/InfoPerosonnels";
class Profile extends Component {
    render() {
        return (
            <React.StrictMode>
                <Nav />
                <InfoPerosonnels />
            </React.StrictMode>
        );
    }
}

ReactDOM.render(<Profile />, document.getElementById("root"))