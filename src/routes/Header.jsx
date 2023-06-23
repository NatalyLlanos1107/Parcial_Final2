import React from 'react'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from '../componentes/Home'
import { About } from '../componentes/About'
import { Dashboard } from '../componentes/Dashboard'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li> 
                    <NavLink to='/home' className={({isActive}) => isActive ? 'nav-active' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                     <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Dashboard
                    </NavLink>  
                </li>
            </ul>
        </nav>
        <Routes>
            
            <Route path='about' element={<About/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='/*' element={<Navigate to='/home'replace/> }/>
        </Routes>
    </BrowserRouter>
    
  )
}

export {Header}