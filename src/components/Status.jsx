function Status(props) {
    if (props.correct) {
        return (
            <h2 className="text-lg text-green-500 mt-12 font-bold text-center">
                Correct!
            </h2>
        );
    }

    return (
        <h2 className={`text-lg text-red-500 mt-12 font-bold text-center`}>
            Wrong!
        </h2>
    );
}

export default Status;
