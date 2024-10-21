import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
import { HeroBg } from "./app.styled";
import Footer from "../Footer/footer";
import FeaturedMovie from "../FeaturedMovie/featured";
import { movies } from "../../movies";

const App = () => {
    return(
        <div>
            <HeroBg>
                <Header/>
                <Hero/>
            </HeroBg>
            <FeaturedMovie movies={movies}/>
            <Footer/>
        </div>
        
    )
}

export default App