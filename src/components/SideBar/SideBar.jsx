import React from 'react';
import style from './SideBar.module.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <button className={style.iconButton} >
      <a href="https://www.linkedin.com/in/bautistazitelli"  className={style.links}  target="_blank" rel="noopener noreferrer"><BsLinkedin className={style.icon}/></a>
      </button>
      <button className={style.iconButton} >
      <a href="https://www.instagram.com/bautizitelli/" className={style.links} target="_blank" rel="noopener noreferrer"><BsInstagram className={style.icon}/></a>  
      </button>
      <button className={style.iconButton} >
      <a href="https://github.com/Bautizitelli" className={style.links} target="_blank" rel="noopener noreferrer"><BsGithub className={style.icon}/></a>  
      </button>
    </div>
  );
}

export default Sidebar;