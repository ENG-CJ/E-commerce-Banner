import Card from "./Card";
import MenuItem from "./MenuItem";
import styles from "./menuList.module.css";
// import laptop from './images/laptop.png'
import Error from "./Error";
const MenuList = (props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.menuTitle}>High Quality Electronics</h2>

      {props.menuItems.menus.length > 0 ? (
        <div className={styles.row}>
          {props.menuItems.menus.map((menu) => (
            <Card key={menu.id}>
              <div className={styles.menu_img}>
                <img src={`../img/${menu.image}`} alt="menu" />
              </div>
              <div className={styles.menu_title}>
                <h3>{menu.menu}</h3>
              </div>
              <div className={styles.description}>
                <p>{menu.description}</p>
              </div>
              <div className={styles.price}>
              
                <span className={styles.current_price}>${menu.price}</span>
                <span className={styles.old_price}>${menu.old}</span>
              </div>
           
              <div className={styles.buttons}>
                <button className={styles.buy}>
                  <i class="fa-solid fa-cart-shopping"></i> Buy Now
                </button>
                <button className={styles.view}>View More</button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Error message={"No Menus Data Available for This Section! "} />
      )}
    </section>
  );
};
export default MenuList;
