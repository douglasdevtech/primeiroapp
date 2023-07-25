import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Comentarios(){
  return (
    <>
    <Header/>

    <div id="banner"></div>
    <div className="comentarios">

        <p> CAMPO DOS COMENTÁRIOS</p>

    </div>

    <Footer/>
    </>
  )
};

export default Comentarios;