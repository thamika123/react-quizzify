import Header from "./Header";

function EndQuiz(props) {
    if (props.numCorrect >= 3) {
        return (
            <Header>
                Well done! You got{" "}
                <span className="text-green-500">{props.numCorrect}/5</span>!
            </Header>
        );
    }

    return (
        <Header>
            You got <span className="text-red-500">{props.numCorrect}/5</span>.
            Better luck next time!
        </Header>
    );
}

export default EndQuiz;
