
import Header from './components/Header';
import Tech from './components/tech';
import Main from './components/main';
import Footer from './components/Footer';
import Cards from './components/cards';
import HomePage from './components/navbar';

function App() {
  return (
    
    <div className='main'>
      <HomePage/>

      <Header/>
    <Tech/>
   <Main/>
    <Footer/>
    <Cards/>
    </div>
  );
}

export default App;
