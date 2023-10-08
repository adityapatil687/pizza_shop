import './App.css';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';

import MenuScreen from "./pages/MenuScreen";
import  HomeScreen  from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import CartScreen from './pages/CartScreen';

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  NavLink,
  Outlet
} from 'react-router-dom'

function App() {
  return (
    <RouterProvider router={router} />
    );
  }

export default App;

const RootLayout = () =>
{
  return(
    <>
      {ReactDOM.createPortal(<Navbar />, document.getElementById('navbar-container'))}
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<HomeScreen />} />
      <Route path="menu" element={<MenuScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="cart" element={<CartScreen />} />
    </Route>
  )
)