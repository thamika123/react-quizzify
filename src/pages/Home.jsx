import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to get started:</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    img={geoIcon}
                    subject="Geography"
                    onClick={onClick}
                />
                <SubjectCard
                    img={histIcon}
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    img={sciIcon}
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    img={spaceIcon}
                    subject="Space"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
