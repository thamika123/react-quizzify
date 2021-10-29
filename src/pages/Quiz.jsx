import Header from "../components/Header";
import AnswerCard from "../components/AnswerCard";

import questions from "../questions.json";

function Quiz(props) {
    const question = questions[props.subject][0].question;
    const answers = questions[props.subject][0].answers;

    return (
        <div>
            <Header text={question} />
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <AnswerCard answers={answers} />
            </div>
        </div>
    );
}

export default Quiz;
