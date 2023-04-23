
import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login';
import { CartProvider } from './components/ContextReducer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SignUp from './screens/SignUp';
import MyOrder from './screens/MyOrder';
// import Cart from './screens/Cart';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route exact path='/login' element={<Login></Login>}></Route>
            <Route exact path='/createuser' element={<SignUp></SignUp>}></Route>
            <Route exact path='/myorder' element={<MyOrder></MyOrder>}></Route>
            {/* <Route exact path='/cart' element={<Cart></Cart>}></Route> */}
          </Routes>
        </BrowserRouter>

      </CartProvider>

    </>
  );
}

export default App;
