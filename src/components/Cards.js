import React,{useState} from 'react'
import Modal from './Modal';

function Cards({book,addItem,addFavorite,removeItem,removeFavorite,add,favorite}) {

  const [show,setShow] = useState(false);
  const [bookItem,setBookItem] = useState();
  return (
    <div className='cards-div'>
      {
         book.map((el)=> {
          let thumbnail = el.volumeInfo.imageLinks&&el.volumeInfo.imageLinks.smallThumbnail;
          let price =el.saleInfo.listPrice&&el.saleInfo.listPrice.amount ;
          const obj = {
            id:el.id,
            title : el.volumeInfo.title,
            author : el.volumeInfo.authors,
            image : thumbnail
          }
          if(thumbnail != undefined && price != undefined){
            return(
              <div className='cards-inner' key={el.id}  >

                {
                  favorite.some(p=>p.id === el.id)?
                  (<div className='favorite btn1'><i style={{color:'yellow'}} onClick={()=>removeFavorite(el.id)} class="fa fa-star"></i></div>)
                  :(
                  <div className='favorite btn2'><i  onClick={()=>addFavorite(obj)} class="fa fa-star-o"></i></div>)
                }




                {/* <div>
                  <div className='img-div'><img src={thumbnail} /></div>
                
                <h4>{el.volumeInfo.title} </h4>
                <span>By</span>
                <p>{el.volumeInfo.authors}</p>
                <p>{price}</p>
                </div> */}
                

              <div onClick={()=>{setShow(!show);setBookItem(el)}}>
              <div className='img-div'><img src={thumbnail} /></div>
              <div>{el.volumeInfo.title} </div>
              <span>By</span>
               <div>{el.volumeInfo.authors}</div>
               <div>${price}</div> 
               </div>
             

              

              {
                add.some(item=>item.id === el.id)? (  <div className='cards-inner-flex'>

                 <button className='add-remove remove' type="button" onClick={()=>removeItem(el.id)}>Remove Book</button>
               
                
                </div> ) :
                 (<div className='cards-inner-flex'>

                  <button className='add-remove add' type="button"  onClick={()=>addItem(obj)}>Add Book</button>
                
                 
                 </div>)
              }
              
             
    
              </div>
              


              
            )
          }   })
      }


      {/* <div className='cards-inner'>
      <h1>ghioj</h1>
          <img src={require('../images/book1.jfif')}/>
      </div> */}

     {
      show && <Modal bookItem={bookItem} onClose={()=>setShow(false) } show={show} />
    
     }     


       
     
     
    </div>
  )
}

export default Cards