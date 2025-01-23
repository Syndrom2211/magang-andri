import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './pages'
import ForgetPassword from './pages/ForgetPass'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        </Routes>
      </Router>
    </>
  )
};

export default App;
