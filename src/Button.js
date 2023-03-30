import styles from './button.module.css'


const Button=(props)=>{
    return(
        <div className="">
            <button 
            onClick={props.event=="" || props.event==null? ()=>alert("Default One"): props.event} 
             className={styles.buttons}
             
             style={{marginTop: props.top
            ,marginLeft: props.left,marginRight: props.right,
            margin: props.margin, color: props.color, background: props.background,
            fontSize: props.font_size}}>
            
            {props.icon}{props.text}
            
        
            </button>
        </div>
    )
}
export default Button;