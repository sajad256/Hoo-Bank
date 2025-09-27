import React from "react";
import { Navbar } from "./Components/index";
import styles from "./Style";

export default function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden text-white">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
