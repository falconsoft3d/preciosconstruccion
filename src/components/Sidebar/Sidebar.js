import React from 'react'

function Sidebar() {
  return (
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Pre.Const</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>APUs</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Blog</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Descargas</span></a>
        </li>

        

        

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        
        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Acerca De</span></a>
        </li>


    </ul>
  )
}

export default Sidebar