import Card from "./Card";
import styles from './collection.module.css'
import Error from './Error'
const Collections=(props)=>{
    return(
        <section className={styles.container}>
        <h2 className={styles.menuTitle}>T-shirt Collections</h2>
  
        {props.collections.Collections.length > 0 ? (
          <div className={styles.row}>
            {props.collections.Collections.map((menu) => (
              <Card key={menu.id}>
                <div className={styles.menu_img}>
                  <img src={`../img/${menu.image}`} alt="menu" />
                </div>
                <div className={styles.menu_title}>
                  <h3>{menu.title}</h3>
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
                    <i class="fa-solid fa-cart-shopping"></i> Buy
                  </button>
                  <button className={styles.view}><i class="fa-regular fa-heart"></i> Favorite</button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Error message={"No Menus Data Available for This Section! "} />
        )}
      </section>
    )
}
export default Collections;