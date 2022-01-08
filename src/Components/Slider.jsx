import React from 'react';

let Slider = (props) => {
    return (    <div class="menu-slider">
    <div class="circle" onClick = {props.handleClick}></div>
    <div class="circle" onClick = {props.handleClick}></div>

</div>)
}

export default Slider;