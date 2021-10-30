import React from "react";

import Header from "../components/Header";
import AnswerCard from "../components/AnswerCard";
import Status from "../components/Status";
import EndQuiz from "../components/EndQuiz";

import questions from "../questions.json";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            numCorrect: 0,
            statusShown: false,
            currentQuestionCorrect: false,
        };
        this.questions = questions[this.props.subject];

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(answer) {
        this.checkAnswer(answer);
        this.setState(state => ({
            questionNumber:
                state.questionNumber < 4 ? state.questionNumber + 1 : false,
        }));
    }

    checkAnswer(answer) {
        this.setState({ statusShown: true });

        const correctAnswer =
            this.questions[this.state.questionNumber].correctAnswer;

        answer === correctAnswer
            ? this.setStatus("correct")
            : this.setStatus("wrong");
    }

    setStatus(status) {
        if (status === "correct") {
            this.setState(state => ({
                numCorrect: state.numCorrect + 1,
                currentQuestionCorrect: true,
            }));
        } else {
            this.setState({ currentQuestionCorrect: false });
        }

        setTimeout(() => this.setState({ statusShown: false }), 500);
    }

    render() {
        if (this.state.questionNumber !== false) {
            const question = this.questions[this.state.questionNumber].question;
            const answers = this.questions[this.state.questionNumber].answers;

            return (
                <div>
                    <Header>{question}</Header>
                    <div className="flex justify-center mt-16">
                        <AnswerCard
                            answers={answers}
                            onClick={this.handleClick}
                        />
                    </div>
                    {this.state.statusShown && (
                        <Status correct={this.state.currentQuestionCorrect} />
                    )}
                </div>
            );
        }

        return <EndQuiz numCorrect={this.state.numCorrect} />;
    }
}

export default Quiz;
