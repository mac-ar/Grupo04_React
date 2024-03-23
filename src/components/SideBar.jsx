import React from "react";
import image from "../assets/Electro/LogoEHV_2.png";
import { Link, Routes, Route } from "react-router-dom";


export function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-info sidebar sidebar-dark accordion"
        id="accordionSidebar"

      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="http://localhost:3000/" target="_blank"
        >
          <div className="sidebar-brand-icon">
            <img src={image} alt="Digital House" width="150" />
            {/* <span>ElectroHouse</span> */}
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-1" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - ElectroHouse</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Menu - App</div>

        {/*<!-- Nav Item - Charts -->*/}

        {/*<!-- Listado de Usuarios -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios">
            <i className="fas fa-solid fa-users"></i>
            <span>Listado Usuarios</span>
          </Link>
        </li>

        {/* Link ProductosInDb*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Productos">
            <i className="fas fa-solid fa-cart-shopping"></i>
            <span>Listado de Productos</span>
          </Link>
        </li>

        {/*<!-- Ultimo Producto -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/UltProducto">
            <i className="fas fa-solid fa-list-check"></i>
            <span>Ultimo Producto Cargado</span>
          </Link>
        </li>

        {/*<!-- Ultimo Usuario -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/UltUsuario">
            <i className="fas fa-solid fa-user"></i>
            <span>Ultimo Usuario Cargado</span>
          </Link>
        </li>

        {/*<!-- Categorias -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Categorias">
            <i className="fas fa-duotone fa-layer-group"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Buscar Productos -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/SearchProducto">
            <i className="fas fa-fw fa-table"></i>
            <span>Buscar Produtos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

    </React.Fragment>
  );
}