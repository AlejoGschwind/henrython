import React from 'react'

const NavBar = () => {
    
    return (
        <>
            <nav class="nav-wrapper">
                <div class="container">
                    <a href="#" class="brand-logo">LOGO</a>
                    <a href="#" data-target="menu-responsive" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="">INICIO</a></li>    
                        <li><a href="">INGRESAR</a></li>
                        <li><a href="../Register/index.js" >Registrarse</a></li>
                    </ul>
                </div>
            </nav> 
            <ul class="sidenav" id="menu-responsive">
                <li><a href="">INICIO</a></li>    
                <li><a href="">INGRESAR</a></li>
                <li><a href="../Register/index.js" >Registro</a></li>
            </ul>
        </>
    )
};

export default NavBar;