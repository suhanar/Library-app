import React from 'react';
import {Link} from 'react-router-dom';

function Favorite({favorite,removeFavorite}) {
  return (
    <div  className='listadd-div'>
      <Link to='/'><button className='home-btn'>Home</button></Link>
      
      {

  favorite.map((el)=> {
    return(
      <div className='listadd' key={el.id}>
      <img src={el.image} />
      <h6>{el.title}</h6>
      <i class="fa fa-trash" aria-hidden="true" onClick={()=>removeFavorite(el.id)}></i>
   </div>
     )
    })

        
        
        }</div>
  )
}

export default Favorite