import React from "react";
import "../css/App.css";

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <header className="header-style">
            <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;