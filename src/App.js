import './styles/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import './styles/home.scss';
import './styles/header.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import Footer from './components/layout/Footer';
import Contact from './components/contacts/Contact';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
