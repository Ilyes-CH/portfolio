import React, { Component, lazy, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const ContactSection =lazy(()=>import('./components/ContactSection')) ;
const Home = lazy(() => import('./components/Home'))
const Header = lazy(() => import('./components/header'))
const Footer = lazy(() => import('./components/footer'))
const NotFound = lazy(() => import('./components/NotFound'))
const About = lazy(() => import('./components/about'))
class MyComponent extends Component {



  render() {
    return (
      <>
        <Router>
            <Header  />
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactSection />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          <Footer />
        </Router>
      </>

    );
  }
}

export default MyComponent;
