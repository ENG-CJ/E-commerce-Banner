import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
        <div className={styles.row}>
      
      <div className={styles.left}>
        <span className={styles.links_container}>Quick Links</span>
       <div className={styles.links}>
       <ul>
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Collections</a></li>
        </ul>
       </div>
      </div>
      <div className={styles.left}>
      <span className={styles.links_container}>Subscriptions</span>
       <div className={styles.links}>
       <ul>
            <li><a>Detail Action</a></li>
            <li><a>Throw Connection</a></li>
            <li><a>Gateways E-comm</a></li>
        </ul>
       </div>
      </div>
      <div className={styles.left}>
      <span className={styles.links_container}>Payments</span>
       <div className={styles.links}>
       <ul>
            <li><a>Payouts</a></li>
            <li><a>Credits</a></li>
            {/* <li><a>Collections</a></li> */}
        </ul>
       </div>
      </div>
      <div className={styles.left}>
      <span className={styles.links_container}>Social Media</span>
       <div className={styles.social}>
       <ul>
           <li><i class="fa-brands fa-facebook"></i></li>
           <li><i class="fa-brands fa-whatsapp"></i></li>
           <li><i class="fa-brands fa-linkedin"></i></li>
        </ul>
       </div>
      </div>
      <div className={styles.left}>
         
      </div>
  </div>
    </section>
  );
};
export default Footer;
