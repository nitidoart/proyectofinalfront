import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
// import NotFound from './utils/notFound/NotFound';

import Helpers from './Helpers/RoutesFront';
import AccessAccount from './Views/AccessAccount/AccessAccount';
import ProfileProveedor from './components/ProfileComponents/ProfileProveedor/profileproveedor';
import NavBar from './components/NavBar/NavBar';

function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route exact path={Helpers.Landing} element={<Landing/>}/>
        <Route path={Helpers.AccessAccount} element={<AccessAccount/>} />

        {/* Cliente */}
        <Route path={Helpers.HomeCustomer} element={<Home/>}/>

        {/* Proveedor */}
        <Route path={Helpers.ProfileProveedor} element={<ProfileProveedor/>}/>

        {/* Administrador */}
      </Routes>
    </div>
  )
}

export default App
