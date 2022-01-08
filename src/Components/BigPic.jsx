import React from 'react';

let BigPic = (props) => {

    if(props.clickActive == 1)
    {

        console.log(props.clickActive)
        
        return (
            <div className="bigpic"><img src = {props.picUrl}></img></div>
        )
    }

    return <div></div>

}

export default BigPic;