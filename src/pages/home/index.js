import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import video from '../../assets/video.mp4';
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";

function Home(){
        return (
            <>
           <Header />
           <div id='banner'></div>
           <div id='trailer-container'>
                  <div className='content'>
                        <video controls className='trailer' >
                              <source src={video} />
                              seu navegador não possui suporte para videos
                        </video>
                        <div id="sinopse">
                              <p className="description">
                                    Mundos colidem em The Flash quando Barry usa seus superpoderes
                                    para viajar no tempo e mudar os eventos do passado.
                              </p>
                              <Button/>
                        </div>                        
                  </div>
            </div> 
            <Cards />
            <Footer />
            </>
            
      )
};

export default Home;