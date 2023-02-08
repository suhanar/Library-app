import React from 'react';
import { Route,Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';


function BookList({add,removeItem}) {
  return (
   
    <div className='listadd-div'>
       <Link to='/'>
        <button className='home-btn'>Home</button></Link>

      {
        add.map((el)=> {
         // let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
         return(
          <div className='listadd' key={el.id}>
          <img src={el.image} />
          <h6>{el.title}</h6>
          <i class="fa fa-trash" aria-hidden="true" onClick={()=>removeItem(el.id)}></i>
       </div>
         )
         
        
          
        })
      }


      </div>
  )
}

export default BookList