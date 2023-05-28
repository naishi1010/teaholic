import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Place from './components/Places';
import Products from './components/Products';
import Special from './components/Special';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero/>
        <Special/>
        <Products/>
        <Place/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
