import Button from "./Button";
import styles from "./subscribe.module.css";
import displayToast from "./Toest";

const Subscription = () => {
  const handleClick = () => {
    // console.log()
    displayToast(
      document.querySelector(".input").value == ""
        ? "Plz Provide Your Email Address"
        : 
            document.querySelector(".input").value +
              " - Thanks For Subscribing Our News Letter We Will Notice Every Update! Tuned On",
            "success"
         
    );
  };
  return (
    <section className={styles.container}>
      <h1>SUBSCRIBE OUR NEWS LETTER</h1>
      <p>
        Get daily updates by subscribing our news letter for better experiences
      </p>
      <div className={styles.subscribe_form}>
        <div className={styles.form_group}>
          <input
            type={"email"}
            placeholder="example@gmail.com"
            className={[styles.input, "input"].join(" ")}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          left={0}
          text="Subscribe"
          icon={<i class="fa-regular fa-bell" style={{ marginRight: 10 }}></i>}
          event={handleClick}
        />
      </div>
    </section>
  );
};
export default Subscription;

{
  /* <button className={styles.buy} onClick={handleClick}><i class="fa-regular fa-bell"></i> Subscribe</button> */
}
{
  /* <button className={styles.view}>Learn More</button> */
}
