//import logo from './logo.svg';
import './App.css';
import House from './components/House'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import ListAHouse from './components/ListAHouse'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Enquiry from './components/Enquiry';
import PageNotFound from './components/PageNotFound'
import { Search } from 'react-router-dom';
import SearchFilter from './components/SearchFilter';
import SearchHouse from './components/SearchHouse';
import SearchResults from './components/SearchResults';
import Home from './components/Home'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/House/:id' element={<House/>}/>
        <Route path='/ListAHouse' element={<ListAHouse/>}/>
        <Route path='/search' element={<SearchFilter/>}/>
        <Route path='/searchresults/:locality/:bhk' element={<SearchResults/>}/>
        <Route path='/searchhouse/:id' element={<SearchHouse/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Enquiry' element={<Enquiry/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
      
  );
}

export default App;
