import {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Panel from './components/Panel';
import Book from './components/Book';
import axios from 'axios';
import Carousel from './components/Carousel';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import BookList from './components/BookList';


const API_KEY = 'AIzaSyC3jVLIYb8-6yobnr4DBvTvI_sNxzG_wHs';
function App({add, setAdd, addItem,favorite, addFavorite,removeItem,removeFavorite}) {
  const [search,setSearch] = useState('');
  const [book,setBook] = useState([]);
  const [carousel,setCarousel] = useState([]);
  

  const lookBook =(e)=>{
    //console.log('looookk')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=${40}`)
    .then(res=>setBook(res.data.items)).catch((err)=>console.log(err))

    console.log(book)

   
    

  }

  const carouselList=(e)=>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=rowling&key=${API_KEY}&maxResults=${10}`)
    .then(res=>setCarousel(res.data.items)).catch((err)=>console.log(err))


  }

 
 
  useEffect(() => {

  lookBook();
  carouselList();
 
  
   
}, []);

  return (
  
    <div className="App">
      <div className='header'>
       

       
        <Header search={search} setSearch={setSearch} lookBook={lookBook}/>
      </div>

      <div className='side-by-side'>

      <div className='panel'>
        <Panel add={add} favorite={favorite}/>
      </div>

      <div className='book'>
        
        <Book search={search} setSearch={setSearch} book={book} carousel={carousel} addItem={addItem} addFavorite={addFavorite} removeItem={removeItem} removeFavorite={removeFavorite}  add={add} favorite={favorite} />
      </div>

      </div>


       

     

     
     
    </div>
  )
    
}

export default App;
