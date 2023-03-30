import Test from "./Test.module.css";

const Header=()=>{
    return(
       <div className={Test.navContainer}>
       <nav  className={`${Test.styleNav} ${Test.container}`}>
        <a href="" className={Test.brand}>CJ FT ONLINE E-COMMERCE</a>
        <ul className={Test.list_nav}>
            <li ><a href="" className={`${Test.active} ${Test.nav_list}`}>Home</a></li>
            <li><a href="" className={`${Test.nav_list} ${Test.hover_effect}`}>Menus</a></li>
            <li><a href=""  className={`${Test.nav_list} ${Test.hover_effect}`}>FAQs</a></li>
            <li className={Test.cart}><i className={["fa-solid fa-cart-shopping", Test.hover_effect].join(" ")}></i></li>
        </ul>
       </nav>

       </div>
    )
}
export default Header;