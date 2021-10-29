import React from "react";
import ReactDOM, { render } from "react-dom";

import geoIcon from "./images/geography.svg";
import histIcon from "./images/history.svg";
import sciIcon from "./images/science.svg";
import spaceIcon from "./images/space.svg";

import Card from "./components/Card";

function Home(props) {
    return (
        <div>
            <h1 className="text-3xl font-sans mt-60 font-bold text-gray-800 text-center">
                Choose a category to get started:
            </h1>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <Card img={geoIcon} title="Geography" onClick={props.onClick} />
                <Card img={histIcon} title="History" onClick={props.onClick} />
                <Card img={sciIcon} title="Science" onClick={props.onClick} />
                <Card img={spaceIcon} title="Space" onClick={props.onClick} />
            </div>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: "home" };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ page: "quiz" });
    }

    render() {
        if (this.state.page === "home") {
            return <Home onClick={this.handleClick} />;
        }

        return <div></div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
