// import logo from './logo.svg';
import './App.css';


import { Route, Routes } from 'react-router-dom';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import Trangchu from './DOAN/Trangchu';

import GioHang from './DOAN/gio-hang/giohang';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<><Trangchu /></>} />
      </Routes>
    </>
  );
}

export default App;
