import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Carousel({search,carousel}) {
  return (
     <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={3}
    >
  <div className='carousel-flex'>
  <ButtonBack className='back'>Back</ButtonBack>
      <Slider>


{
         carousel.map((el)=> {
          let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
          let price =el.saleInfo.listPrice&&el.saleInfo.listPrice.amount ;
          if(thumbnail != undefined && price != undefined){
            return(
              <Slide index={0} key={Math.random()}>
              <div className='cards-inner1' >

              <div className='img-div'><img src={thumbnail} /></div>
              <div>{el.volumeInfo.title} </div>
              <span>By</span>
               <div>{el.volumeInfo.authors}</div>
              <div>{price}</div>
              
    
              </div>
              </Slide>


              
            )
          }   })
      }


 


        
{/*         <Slide index={1}>Slide 2</Slide>
        <Slide index={2}>Slide 3</Slide> */}
      </Slider>
      
      <ButtonNext className='next'>Next</ButtonNext>

</div>
    </CarouselProvider>
  )
}

export default Carousel