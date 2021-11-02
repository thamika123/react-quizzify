function EndQuiz(props) {
    const percentCorrect = (100 * props.numCorrect) / 5;

    let header;
    if (percentCorrect >= 60) {
        header = (
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
                Well done! You got{" "}
                <span className="text-green-500">{percentCorrect}%!</span>
            </h1>
        );
    } else {
        header = (
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
                You got <span className="text-red-500">{percentCorrect}%.</span>{" "}
                Better luck next time!
            </h1>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen">
            {header}
        </div>
    );
}

export default EndQuiz;
