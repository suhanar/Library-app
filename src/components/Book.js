import React from 'react';
import Cards from './Cards';
import Carousel from './Carousel';


function Book({search,book,carousel,addItem,addFavorite,removeItem,removeFavorite,add,favorite}) {
  return (
    <div className='book-div' >

       {/* <Cards />
        <Cards />
        <Cards /> */}
        
      
        {
        search == ''?
        

        <div className='carousel'><Carousel search={search} carousel={carousel}/></div> : 
       <Cards book={book} addItem={addItem} addFavorite={addFavorite} removeItem={removeItem} removeFavorite={removeFavorite} add={add} favorite={favorite}/>

       
       
  
        }   
     
     

     
    </div>
  )
}

export default Book