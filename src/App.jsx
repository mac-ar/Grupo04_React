import React from "react";
import { SideBar } from "./components/SideBar";
import { GenresInDb } from "./components/GenresInDb";
import { LastMovieInDb } from "./components/LastMovieInDb";
import { ContentRowCards } from "./components/ContentRowCards";
import { ContentWrapper } from "./components/ContentWrapper";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router";
import { CategoriasInDb } from "./components/CategoriasInDb";

import "./App.css";
import { ProductosInDb } from "./components/ProductosInDb";
import { UltimoProducto } from "./components/UltimoProducto";
import { UltimoUsuario } from "./components/UltimoUsuario";
import {SearchProducto} from "./components/SearchProducto";
import {UsuariosInDb} from "./components/UsuariosInDb"


export function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            <TopBar />
            <Routes>
              <Route exact path="/" element={<ContentWrapper />} />
              {/* <Route path="/allGenres" element={<GenresInDb />} /> */}
              <Route path="/usuarios" element={<UsuariosInDb />} />
              <Route path="/Productos" element={<ProductosInDb />} />
              <Route path="/UltProducto" element={<UltimoProducto />} />
              <Route path="/UltUsuario" element={<UltimoUsuario />} />
              <Route path="/allMovies" element={<ContentRowCards />} />
              <Route path="/Categorias" element={<CategoriasInDb />} />
              <Route path="/SearchProducto" element={<SearchProducto />} />
              <Route path="*" element={<NotFound />} />
            </Routes> 
            <Footer />            
          </div>           
        </div> 
            
      </div>
    </React.Fragment>
  );
}
