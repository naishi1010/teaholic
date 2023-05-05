import Header from './components/Header';
import Hero from './components/Hero';
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
      </main>
    </>
  );
}

export default App;
