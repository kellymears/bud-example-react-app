import React from "react";

import Logo from "@src/svg/logo.svg";
import styles from "@src/App/styles.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <Logo />

        <span>
          Edit <code>src/components/App.js</code> and save to reload
        </span>
      </div>
    </div>
  );
};
