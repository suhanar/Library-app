import React from 'react';
import PanelCard from './PanelCard';

function PanelList({add,favorite}) {
    
  return (
    <div className='panel-list'>
        <PanelCard add={add} favorite={favorite}/>

    </div>
  )
}

export default PanelList