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

const button: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: 15,
    marginLeft: 5,
    fontFamily: "Rhodium Libre",
    fontSize: 18,
    zIndex: 2,
    color: "black",
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    float: 'right',
    marginRight: 10,
    marginTop: '1%',
    cursor: 'pointer'
};

const TopBar = () => {
    return (
        <div style={topbar}>
            <div className="flex" style={{display: "flex-row"}}>
                <div style={{fontFamily:"Rhodium Libre", fontSize: 36, marginLeft: 10, float: "left", cursor: "pointer"}}>TL;DR Websites</div>
                <div style={button}>Log Out</div>
            </div>
        </div>
    );
};

export default TopBar;