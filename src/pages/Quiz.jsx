import React from "react";

import Header from "../components/Header";
import AnswerCard from "../components/AnswerCard";
import questions from "../questions.json";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { questionNumber: 0 };
        this.questions = questions[this.props.subject];

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            questionNumber:
                state.questionNumber < 4 ? state.questionNumber + 1 : false,
        }));
    }

    render() {
        if (this.state.questionNumber !== false) {
            const question = this.questions[this.state.questionNumber].question;
            const answers = this.questions[this.state.questionNumber].answers;

            return (
                <div>
                    <Header text={question} />
                    <div className="flex flex-row flex-wrap justify-center mt-16">
                        <AnswerCard
                            answers={answers}
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default Quiz;
