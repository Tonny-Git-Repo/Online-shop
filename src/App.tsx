//import './styling/index.scss'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import { Footer, Loading, NavBar, SideBar } from './components';
import { HomePage, SingleProductPage, CartPage, CheckoutPage, ErrorPage, AboutPage, ProductPage, PrivateRoute, AuthWrapper } from './pages';

export class Routing{
  public static RoutingPrefix = `/my-shop`;
  public static HomePage = `${Routing.RoutingPrefix}/home`;
  public static AboutPage = `${Routing.RoutingPrefix}/about`;
  public static AuthWrapper =`${Routing.RoutingPrefix}/auth`;
  public static CartPage=`${Routing.RoutingPrefix}/cart`;
  public static CheckoutPage=`${Routing.RoutingPrefix}/checkout`;
  public static ErrorPage= '*'; //`${Routing.RoutingPrefix}/error`;
  public static ProductPage=`${Routing.RoutingPrefix}/product`;
  public static SingleProduct=`${Routing.RoutingPrefix}/single-product/:id`;
  public static PrivateRoute=`${Routing.RoutingPrefix}/private`;
}

export const App: React.FC = (): JSX.Element => {
  return(
    <React.Suspense fallback = {<Loading/>}>
    <Router>

      <NavBar/>
      <SideBar/>
      
      <Routes>
        <Route path = {`${Routing.HomePage}`} element ={<HomePage/>}/>
        <Route path = {`${Routing.AboutPage}`} element ={<AboutPage/>}/>
        <Route path = {`${Routing.AuthWrapper}`} element ={<AuthWrapper/>}/>
        <Route path = {`${Routing.CartPage}`} element ={<CartPage/>}/>
        <Route path = {`${Routing.ProductPage}`} element ={<ProductPage/>}/>
        <Route path = {`${Routing.SingleProduct}`} element ={<SingleProductPage/>}/>
        <Route path = {`${Routing.CheckoutPage}`} element ={<CheckoutPage/>}/>
        <Route path = {`${Routing.ErrorPage}`} element ={<ErrorPage/>}/>
      </Routes>
    </Router>
    <Footer/>
   </React.Suspense>
  )
}


