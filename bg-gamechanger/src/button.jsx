import React from "react"

function colName(color){
    return color.charAt(0).toUpperCase() + color.slice(1);
}

function Button(props){

    const buttonStyle = {
        backgroundColor: props.color,
        color: props.text || "white"
    }

    return (
        <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={buttonStyle}
            onClick = {props.onClick}
            >{colName(props.color)}
        </button>
    );
};

export default Button