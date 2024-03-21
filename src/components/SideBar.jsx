import React from "react";
import image from "../assets/Electro/LogoEHV.png";
import {ContentWrapper} from './ContentWrapper';
import {GenresInDb} from './GenresInDb';
import {LastMovieInDb} from './LastMovieInDb';
import {ContentRowCards} from './ContentRowCards';
import {NotFound} from './NotFound';
import {SearchMovies} from "./SearchMovies";
import {ProductosInDb} from "./ProductosInDb";
import { Link, Routes, Route } from "react-router-dom";
import { CategoriasInDb } from "./CategoriasInDb";
import { UltimoProducto } from "./UltimoProducto";


export function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-50" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

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
        {/* <li className="nav-item">
          <Link className="nav-link" to="/allGenres">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Géneros</span>
          </Link>
        </li> */}

        {/*<!-- Listado de Usuarios -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Listado Usuarios</span>
          </Link>
        </li>


        {/* Link ProductosInDb*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Productos">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Listado de Productos</span>
          </Link>
        </li>

        {/*<!-- Ultimo Producto -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/UltProducto">
            <i className="fas fa-fw fa-folder"></i>
            <span>Ultimo Producto Cargado</span>
          </Link>
        </li>

        {/*<!-- Ultimo Usuario -->*/}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/UltUsuario">
            <i className="fas fa-fw fa-folder"></i>
            <span>Ultimo Usuario Cargado</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Categorias">
            <i className="fas fa-fw fa-table"></i>
            <span>Categorias</span>
          </Link>
        </li>
        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/SearchProducto">
            <i className="fas fa-fw fa-table"></i>
            <span>Buscar Produtos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/404">
            <i className="fas fa-fw fa-question"></i>
            <span>404</span>
          </Link>
        </li> */}

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
      
    </React.Fragment>
  );
}