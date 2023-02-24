import React from 'react';
import { Navbar, Header, Feature, Download, Subscribe, Faq, Footer } from './Components/';

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Feature />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
