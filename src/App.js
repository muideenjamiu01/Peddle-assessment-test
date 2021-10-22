import React from 'react';
import Navbar from './components/navbar/navbar';
import About from './components/getStarted/GetStarted';
import User from './components/Users/user.js';
import Feature from './components/Features/Feature';
import Plan from './components/Plan/Plan';
import Peddle from './components/PeddleToday/Peddle';
import Testimonial from './components/Testimonials/Testimonial';
import Subscribe from './components/Subscriber/Subscribe';
import Footer from './components/Footer/Footer';


import './App.css';

  const App = () => {
    return (
        <div>
           <Navbar/>
           <About/>
           <User/>
           <Feature/>
           <Plan/>
           <Peddle/>
           <Testimonial/>
           <Subscribe/>
           <Footer/>
          
           
        </div>
            
    );
};
export default App;

