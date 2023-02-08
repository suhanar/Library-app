import React,{useState} from 'react';
import App from './App';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Favorite from './components/Favorite';


function App1() {
    const [add,setAdd] = useState([]);
    const [favorite,setFavorite] = useState([]);
   
    const addItem = (items)=>{
        setAdd([...add,items]);
        localStorage.setItem("user", JSON.stringify([...add,items]))
        console.log(items);
       
       

      }
    const addFavorite = (items)=>{
        setFavorite([...favorite,items]);
        localStorage.setItem("userFavorite", JSON.stringify([...favorite,items]))
        console.log('favorites ',items)
    }
    const removeItem = (id)=>{
        //console.log(add)
        const list=add.filter((item)=> (item.id != id));
        setAdd(list);
        localStorage.setItem(
          "user",
          JSON.stringify([...list])
        )

      
    }
    const removeFavorite = (id)=>{
        const list=favorite.filter((item)=> (item.id != id));
        setFavorite(list);
        localStorage.setItem(
          "userFavorite",
          JSON.stringify([...list])
        )
    }
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<App  add={add} setAdd={setAdd} addItem={addItem} favorite={favorite} addFavorite={addFavorite} removeItem={removeItem} removeFavorite={removeFavorite}   />} />
        <Route path='/list' element={<BookList add={add} favorite={favorite} removeItem={removeItem}  />} />
        <Route path='/favorite' element={<Favorite favorite={favorite} removeFavorite={removeFavorite} />} />
     </Routes>
    
    </BrowserRouter>
    
  )
}

export default App1