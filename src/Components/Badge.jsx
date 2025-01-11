import React from "react";

function Badge({ text, backgroundColor, textColor, type }) {
    const className = `badge ${type}-badge`
    const style = {
        backgroundColor,
        color: textColor,
    };

    return (
        <div className={className} style={style}>
        {text}
    </div>
    );
}

export default Badge;
