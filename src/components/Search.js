import React from 'react'

function Search({search,setSearch,lookBook}) {

  const bookSearch=()=>{
    lookBook();
  }
  return (
    <div className='search'>
        <input type="text" placeholder="Search for your favorite books....." value={search} onChange={(e)=>setSearch(e.target.value)} onKeyPress={bookSearch} />
        <i class="fa fa-search"></i>
    </div>
  )
}

export default Search