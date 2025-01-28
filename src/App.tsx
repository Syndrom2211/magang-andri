import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages';
import ForgetPassword from './pages/ForgetPass';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
          <Route path="/dashboard/*" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
};

export default App;
