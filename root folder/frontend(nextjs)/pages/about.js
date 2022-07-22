import Navbar from "../components/Navbar";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Hello World </h1>
      </div>
    </>
  );
};

export default about;
