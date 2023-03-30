
import styles from "./Hero.module.css";
import hero_img from "./images/mobile.png";
const HeroSection=()=>{
return(

   <section className={styles.container}>
      <div className={styles.row}>
        <div class={styles.left_section}>
        
         <h1 className={styles.title}>The Largest E-Commerce Platform In SOMALIA</h1>
         <p className={styles.main_text}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        <button className={styles.explore_button}>Explore More</button>
        </div>
        <div class={styles.img_container}>
        <img src={hero_img} className={styles.img}/>
        </div>
      </div>
   </section>
)

}
export default HeroSection;