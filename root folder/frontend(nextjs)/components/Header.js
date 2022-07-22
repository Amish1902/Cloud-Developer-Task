import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            Welcome
          </span>
          <span className={styles.text}>Love with cloud computing</span>
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>
          Amish Mishra
        </a>
      </div>
    </header>
  );
};

export default Header;
