function Header(props) {
    return (
        <h1 className="text-3xl font-sans mt-64 font-bold text-gray-800 text-center">
            {props.text}
        </h1>
    );
}

export default Header;
