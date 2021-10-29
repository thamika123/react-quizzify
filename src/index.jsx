import React from "react";
import ReactDOM, { render } from "react-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: "home" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(subject) {
        this.setState({ page: "quiz" });
        this.setState({ subject: subject });
    }

    render() {
        if (this.state.page === "home") {
            return <Home onClick={this.handleClick} />;
        }

        return <Quiz subject={this.state.subject} />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
