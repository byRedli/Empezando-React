import React from 'react';
import ThemeToggle from './ThemeToggle';
import profile from '../assets/perrito.png';


export function Sidebar () {
  return (
    <aside className="app-section-sidebar" >
      <img src={profile} alt="" className='aside-imgProfile' />
      <div className='sidebar-containerProfile'>
        <h1>Ilder Yoel Guevara Heredia</h1>
        <h2>Ing. Sistemas</h2>
        <div className='sidebar-iconsRedes'>
          <a href=""><ion-icon name="logo-github"></ion-icon></a>
          <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
        <div className='sidebar-datos'>
          <p><ion-icon name="calendar-outline"></ion-icon> Noviembre 16, 2003</p>
          <p><ion-icon name="location-outline"></ion-icon> Chiclayo, Perú</p>
          <p><ion-icon name="mail-outline"></ion-icon> ilderyoel06@gmail.com</p>
          <p><ion-icon name="call-outline"></ion-icon> +51 984022911</p>
        </div>
        <button className='sidebar-btnDescargarCV'><ion-icon name="download-outline"></ion-icon> Descargar CV</button>
        <ThemeToggle />
      </div>
    </aside>
  );
};

