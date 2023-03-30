
import styles from './content.module.css'

const MainContent=()=>{
    return(
       <section className={styles.container}>
        <div className={styles.row}>
      
            <div className={styles.left}>
                <h1>BUY MOST VALUABLE ELECTRONICS IN SOMALIA</h1>
                <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className={styles.buttons}>
                  <button className={styles.buy}><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
                  <button className={styles.view}>Learn More</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.img}>
                    <img src="../img/buy.png"/>
                </div>
            </div>
        </div>
       </section>

    )
}
export default MainContent;