import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";



function Contato(){
  return (
    <>
    <Header/>

    <div id="banner"></div>

    <div className="information">
      <h1>PARA MAIS INFORMAÇÕES ENTRE EM CONTATO</h1>
      <h2>Emaiil: douglas17pg21@gmail.com</h2>
      <h3>Telefone: (13)991838319</h3>
    </div>
    <Footer />

    </>
  )

    
};

export default Contato;