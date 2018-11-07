import React from 'react';
import {FaTimes, FaCheck} from 'react-icons/fa';

const Item = (props) => (
    <div className={props.itemStatus === true ? "item item--finished" : "item"}>
    <button className="button button--link button--check" onClick={() => {props.handleFinishedItem(props.itemText);
    }}><FaCheck /></button>
    <p className="item__text">{props.itemText}</p>
    
    <button
        className="button button--link button--finished"
        onClick={() => {props.handleDeleteItem(props.itemText);
        }}
    >
    <FaTimes />
    </button>
    </div>
);

export default Item;