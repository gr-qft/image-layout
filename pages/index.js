import styles from "../styles/Home.module.css";

function Button({ children, backgroundColor = "#7D63B9" }) {
  return (
    <button style={{ backgroundColor }} className={styles.button}>
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.ad}>
        <img src="/img/icecream.jpg" alt="tall ice cream" />
        <div className={styles.frame}>
          <div>
            <div>
              <h1>Top 10 </h1> <h1> Hottest Flavours </h1>
            </div>
            <h1> Summer 2021 </h1>
          </div>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.items}>
          <div>
            <img src="/img/ubeicecream.jpg" alt="ube" />
            <div className={styles.frame}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button> Get it </Button>
              </div>
            </div>
          </div>

          <div>
            <img src="/img/Avocado-Ice-Cream-4-1.jpg" alt="avocado" />
            <div className={styles.frame}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button backgroundColor="#206C00"> Get it </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.us}>
          <img src="/img/moreicecream.jpg" alt="ube" />

          <div className={styles.frame}>
            <div>
              <h1> Our Ice Cream Philosophy </h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
