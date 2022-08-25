import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/navbar';
function App() {
  return (
    // <div className="App">
    <div>
   


    <Router>
    <Navbar />
    <Routes>
        <Route  path='/' exact element={<index />} />
        {/* <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/giving' element={<Giving />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/usestate' element={<Usestate />} />
        <Route path='/article' element={<Article />} /> */}
    </Routes>
    </Router>
    </div>
   
  //  </div>
  );
}

export default App;
