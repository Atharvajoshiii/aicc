
import './App.css';
import HomePage from './pages/HomePage';
import {Routes,Route} from 'react-router-dom';
import { SignupFormDemo } from './pages/SignUpForm';
import ThankYou from './pages/ThankYou';
import ShowData from './pages/ShowData';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<SignupFormDemo/>}/>
      <Route path='/thankyou' element={<ThankYou/>}/>
      <Route path='/show/aicc/user/data' element={<ShowData/>}/>
    </Routes>
  );
}

export default App;
