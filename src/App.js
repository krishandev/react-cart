import {BrowserRouter, Routes,Route } from 'react-router-dom'
import './styles/app.scss'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Toaster/>
      <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
