
import Button from './Button';
import styles from './error.module.css'

const Error=({message})=>{
   return(
   <div className={styles.error_container}>
     <span className={styles.error}><i class="fa-solid fa-triangle-exclamation"></i> {message}</span>
     <Button icon=<i class="fa-solid fa-bug" style={{marginRight:"9px"}}></i> text={"Try Again! "}/>
   </div>
   )
}
export default Error;