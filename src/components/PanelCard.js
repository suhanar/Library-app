import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

function PanelCard({add,favorite}) {

    const list=[{favorite:'Favorite',reading:'My Reading List'}]
  return (
    <div className='panel-card'>
        <Login />
        <Logout />
        <ul>
            {
                list.map((el)=>(

                    <div>
                          <li key={Math.random()}>
                        <div>
                        <i class="fa fa-solid fa-book"></i>
                        </div>
                        <Link to='/list'>
                        <button>
                        {el.reading} <span>{add.length}</span>
                        </button>
                       
                        </Link>
                        
                        
                        
                    </li>



                    <li key={Math.random()}>
                        <div>
                        <i class="fa fa-solid fa-book"></i>
                        </div>
                        <Link to='/favorite'>
                        <button>
                        {el.favorite} <span>{favorite.length}</span>
                        </button>
                       
                        </Link>
                        
                        
                        
                    </li>

                    </div>
                   



                ))
            }
        </ul>
    </div>
  )
}

export default PanelCard