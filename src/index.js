import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import Header from "./Header";
import HeroSection from "./HeroSection";
import "./inde.css";
import MenuList from "./MenuList";
import data from "./menu.json";
import MainContent from "./MainContent";
import Collections from "./Collections";
import Shoes from "./Shoes";
import Subscription from "./Subscription";
import Footer from "./Footer";
// import Inbox from './Inbox'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <HeroSection />
    <MenuList menuItems={data} />
    <MainContent />
    <Collections collections={data}/>
    <Shoes collections={data}/>
    <Subscription/>
    <Footer/>
  </>
);
