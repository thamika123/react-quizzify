import React from "react";
import ReactDOM from "react-dom";

import geoIcon from "./images/geography.svg";
import histIcon from "./images/history.svg";
import sciIcon from "./images/science.svg";
import spaceIcon from "./images/space.svg";

import Card from "./components/Card";

function App() {
    return (
        <div>
            <h1 class="text-3xl font-sans mt-60 font-bold text-gray-800 text-center">
                Choose a category to get started:
            </h1>
            <div class="flex flex-row flex-wrap justify-center mt-16">
                <Card imgSrc={geoIcon} title="Geography" />
                <Card imgSrc={histIcon} title="History" />
                <Card imgSrc={sciIcon} title="Science" />
                <Card imgSrc={spaceIcon} title="Space" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
