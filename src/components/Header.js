import React from 'react'
import Search from './Search'
import Title from './Title'

function Header({search,setSearch,lookBook}) {
  return (
    <div className='header-div'>
        <Title />
        <Search search={search} setSearch={setSearch} lookBook={lookBook}/>
    </div>
  )
}

export default Header