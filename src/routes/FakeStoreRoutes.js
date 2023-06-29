import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Products } from '../pages/products/Products';

export function FakeStoreRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/validate/:registrationCode'
            element={<ValidateRegister />}
          />
          <Route
            path='/users/mail/:registrationCode'
            element={<ConfirmChangeEmail />}
          />
          <Route path='profile/*' element={<UserProfile />} />
          <Route path='/profile/:idUser/public' element={<PublicUser />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:idProduct' element={<Product />} />
          <Route path='newproduct' element={<NewProduct />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='DD' element={<DropDown />} />
          {/*Importante, esta ruta tiene que ser la ultima para no tocar con problemas de jerarquias
          <Route path='*' element={<E404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
