import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* <!-- Sidebar - Brand --> */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Pre.Const</div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <Link href="/apus" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                <span>APUS</span>
            </Link> 
        </li>

        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <Link href="/blog" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                <span>Blog</span>
            </Link> 
        </li>


        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <Link href="/download" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                <span>Descarga</span>
            </Link> 
        </li>

        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <Link href="/documentacion-api" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                <span>Documentacion Api</span>
            </Link> 
        </li>

        
        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <Link href="/contact" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                <span>Contactar</span>
            </Link> 
        </li>


    </ul>
  )
}

export default Sidebar