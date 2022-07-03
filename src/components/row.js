import React from "react";

const Row  =({item})=>{
    return <div className="table-row-wrapper">
        <div className="item">{item.position}</div>
        <div className="item">{item.name}</div>
        <div className="item">{item.score}</div>
    </div>
}

export default Row