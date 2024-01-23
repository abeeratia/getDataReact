import React, { useContext } from 'react'
import './sidebar.css'
import logo from '../../image/secrit.jpg'
import { FaTimes } from 'react-icons/fa';
import {links} from './data'
import {social} from './data'
import {Appcontext} from '../../context/appcontext'
import { AiOutlineMenu } from 'react-icons/ai';
function Sidebar() {
  
  const {opensidebar,openside,closeside} = useContext(Appcontext)
          console.log(opensidebar,openside,closeside);
  return (
    <div>
         <button className='close-btn' onClick={()=>openside()} >
         <AiOutlineMenu />
        </button>
        {opensidebar &&  <aside className= 'show-sidebar sidebar'>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeside} >
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>}
    </div>
  )
}

export default Sidebar