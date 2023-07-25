import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function Elenco(){
      return (
        <>
        <Header/>
        <div id="banner"></div>
        <div className="text">
          <p>CONFIRA O ELENCO DO NOVO FILME D.C </p>
        </div>

        <div className="actor-cards-container">
          <div className="cards-content">
              <div class="card banner-4">Bens Afleks - Batman</div>
              <div class="card banner-5">Kiersey Clemons - Iris Allen</div>
              <div class="card banner-6">Michael Shannon - General Zod</div>
              <div class="card banner-7">Maribel Verdao - Nora Allen</div>
              <div class="card banner-8">Saorise Monica - Patty Spivot</div>
              <div class="card banner-9">Ron Livingston - Henry Allen</div>
          </div>
        </div>
        <Footer />
        </>
      )
};

export default Elenco;