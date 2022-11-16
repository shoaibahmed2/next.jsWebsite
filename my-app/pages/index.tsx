import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../component/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Firstbodys from "../component/firstBody";
import Middlebodys from "../component/middlebody";
import { border } from "@chakra-ui/react";
import Thirdbodys from "../component/thirdbody";
import Fourthbody from "../component/fourthbody";
import Fifthbody from "../component/fifthbody";
import Lastbody from "../component/lastbody";
import Footer from "../component/footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Firstbodys />
      <Middlebodys />
      <br />
      <Thirdbodys />
      <Fourthbody />
      <Fifthbody />
      <Lastbody />
      <Footer />
    </div>
  );
}
