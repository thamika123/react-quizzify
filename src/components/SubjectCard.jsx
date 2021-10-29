function SubjectCard(props) {
    return (
        <div
            className="bg-white shadow-lg rounded-2xl h-80 w-72 m-10 hover:shadow-xl"
            onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div className="flex justify-center pt-12">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="180"
                    height="180"
                />
            </div>
            <h2 className="text-gray-800 font-sans font-medium text-xl pt-8 pl-8">
                {props.subject}
            </h2>
        </div>
    );
}

export default SubjectCard;
