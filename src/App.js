import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import ReactDOM from 'react-dom';
import  { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Post from './pages/postjob/Post';
import Postjobform from './pages/postjob/Postjobform';
import Singleview from './components/singleview/Singleview';
import Emphome from './pages/Emphome/Emphome';
import Editform from './components/Editform/Editform'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route exact path='/home' element={<Home/>}></Route>
    <Route path='/post' element={<Post/>}></Route>
    <Route path='/postjob' element={<Postjobform/>}></Route>
    <Route path='/singleview/:id' element={<Singleview/>}></Route>
    <Route path='/editform/:id' element={<Editform/>}></Route>
</Routes></BrowserRouter>
  
      </div>
  );
}

export default App;
