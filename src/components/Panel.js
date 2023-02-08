import React from 'react'
import PanelList from './PanelList'

function Panel({add,favorite}) {
  return (
    <div className='panel-div'>
        <PanelList add={add} favorite={favorite}/>
    </div>
  )
}

export default Panel