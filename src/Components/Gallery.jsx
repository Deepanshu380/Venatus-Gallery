import React from 'react';



let Gallery = (props) => {

    // let folderName = ['venatus-1','vidaai'];



 

    let changePhoto = () => {

      if(props.folder == 1)
      {
        return (        
            <section class="gallery">
            <div class="gallery__img gallery__img--1"><img src="./Pics/venatus-1/gal-1.jpg" alt="img-1" onClick = {props.clickPhoto} no = '1' /></div>
            <div class="gallery__img gallery__img--2"><img src="./Pics/venatus-1/gal-2.jpg" alt="img-2"  onClick = {props.clickPhoto}  no = '2' /></div>
            <div class="gallery__img gallery__img--3"><img src="./Pics/venatus-1/gal-3.jpg" alt="img-3"  onClick = {props.clickPhoto}  no = '3' /></div>
            <div class="gallery__img gallery__img--4"><img src="./Pics/venatus-1/gal-4.jpg" alt="img-4"  onClick = {props.clickPhoto}   no = '4' /></div>
            <div class="gallery__img gallery__img--5"><img src="./Pics/venatus-1/gal-5.jpg" alt="img-5"  onClick = {props.clickPhoto}  no = '5' /></div>
            <div class="gallery__img gallery__img--6"><img src="./Pics/venatus-1/gal-6.jpg" alt="img-6" onClick = {props.clickPhoto}  no = '6' /></div>
            <div class="gallery__img gallery__img--7"><img src="./Pics/venatus-1/gal-7.jpg" alt="img-7" onClick = {props.clickPhoto}  no = '7' /></div>
            <div class="gallery__img gallery__img--8"><img src="./Pics/venatus-1/gal-8.jpg" alt="img-8" onClick = {props.clickPhoto}  no = '8'  /></div>
            <div class="gallery__img gallery__img--9"><img src="./Pics/venatus-1/gal-9.jpg" alt="img-9" onClick = {props.clickPhoto} no = '9'   /></div>
            <div class="gallery__img gallery__img--10"><img src="./Pics/venatus-1/gal-10.jpg" alt="img-10" onClick = {props.clickPhoto} no = '10' /></div>
            <div class="gallery__img gallery__img--11"><img src="./Pics/venatus-1/gal-11.jpg" alt="img-11" onClick = {props.clickPhoto} no = '11' /></div>
            <div class="gallery__img gallery__img--12"><img src="./Pics/venatus-1/gal-12.jpg" alt="img-12" onClick = {props.clickPhoto} no = '12' /></div>
            <div class="gallery__img gallery__img--13"><img src="./Pics/venatus-1/gal-13.jpg" alt="img-13" onClick = {props.clickPhoto} no = '13' /></div>
            <div class="gallery__img gallery__img--14"><img src="./Pics/venatus-1/gal-14.jpg" alt="img-14" onClick = {props.clickPhoto} no = '14' /></div>
        </section>)
      }  

      else {
        return (        
          <section class="gallery">
          <div class="gallery__img gallery__img--1"><img src="./Pics/vidaai/gal-1.jpg" alt="img-1" onClick = {props.clickPhoto} no = '1' /></div>
          <div class="gallery__img gallery__img--2"><img src="./Pics/vidaai/gal-2.jpg" alt="img-2"  onClick = {props.clickPhoto}  no = '2' /></div>
          <div class="gallery__img gallery__img--3"><img src="./Pics/vidaai/gal-3.jpg" alt="img-3"  onClick = {props.clickPhoto}  no = '3' /></div>
          <div class="gallery__img gallery__img--4"><img src="./Pics/vidaai/gal-4.jpg" alt="img-4"  onClick = {props.clickPhoto}   no = '4' /></div>
          <div class="gallery__img gallery__img--5"><img src="./Pics/vidaai/gal-5.jpg" alt="img-5"  onClick = {props.clickPhoto}  no = '5' /></div>
          <div class="gallery__img gallery__img--6"><img src="./Pics/vidaai/gal-6.jpg" alt="img-6" onClick = {props.clickPhoto}  no = '6' /></div>
          <div class="gallery__img gallery__img--7"><img src="./Pics/vidaai/gal-7.jpg" alt="img-7" onClick = {props.clickPhoto}  no = '7' /></div>
          <div class="gallery__img gallery__img--8"><img src="./Pics/vidaai/gal-8.jpg" alt="img-8" onClick = {props.clickPhoto}  no = '8'  /></div>
          <div class="gallery__img gallery__img--9"><img src="./Pics/vidaai/gal-9.jpg" alt="img-9" onClick = {props.clickPhoto} no = '9'   /></div>
          <div class="gallery__img gallery__img--10"><img src="./Pics/vidaai/gal-10.jpg" alt="img-10" onClick = {props.clickPhoto} no = '10' /></div>
          <div class="gallery__img gallery__img--11"><img src="./Pics/vidaai/gal-11.jpg" alt="img-11" onClick = {props.clickPhoto} no = '11' /></div>
          <div class="gallery__img gallery__img--12"><img src="./Pics/vidaai/gal-12.jpg" alt="img-12" onClick = {props.clickPhoto} no = '12' /></div>
          <div class="gallery__img gallery__img--13"><img src="./Pics/vidaai/gal-13.jpg" alt="img-13" onClick = {props.clickPhoto} no = '13' /></div>
          <div class="gallery__img gallery__img--14"><img src="./Pics/vidaai/gal-14.jpg" alt="img-14" onClick = {props.clickPhoto} no = '14' /></div>
      </section>)
      }


    }
    
   return changePhoto();
}

export default Gallery;