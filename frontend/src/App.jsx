import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Toaster } from 'react-hot-toast';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Toaster />
          <Navbar />
          <Routes>
            <Route path='/' element={<h1>Hii there</h1>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}
