import React, { useState } from 'react';
import Heading from './MainHeading'
import Gallery from './Gallery'
import Slider from './Slider';
import BigPic from './BigPic';



let App = () => {

    let [no, setno] = useState(1);

    let [pic, setPic] = useState();

    let [clickActive,setActive] = useState(0);

    let clickPhoto = (event) => {

        console.log(event.target.getAttribute('no'));

        setPic(event.target.getAttribute('src'));

        if(clickActive == 0)
        {

            setActive(1);
        }

        else {
            setActive(0);
        }


    }

    let handleClick = () => {

        if (no == 1) {
            setno(2);
        }

        else if (no == 2) {
            setno(1);
        }

    }


    return (<div>
        <Heading />
        <Gallery folder={no}  clickPhoto = {clickPhoto} />

        <BigPic picUrl={pic} type = {no} clickActive = {clickActive} />
        
        <Slider handleClick={handleClick} />
    </div>)

}

export default App;