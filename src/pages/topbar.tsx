import * as React from "react";
import "@fontsource/rhodium-libre";
import "@fontsource/open-sans";

const topbar: React.CSSProperties = {
    height: 60,
    width: "100%",
    backgroundColor: "black",
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    color: "white",

    marginLeft: 0,
    marginRight: 0,
    zIndex: 2
};

const TopBar = () => {
    return (
        <div style={topbar}>
            <div style={{fontFamily:"Rhodium Libre", fontSize: 36, marginLeft: 10}}>TL;DR Websites</div>
        </div>
    );
};

export default TopBar;