import styles from "./inlinecomponent.module.css";
import React from "react";

function InlineComponent() {
  return (
    <div>
      <h2 className={styles.header}>Inline Component</h2>
    </div>
  );
}

export default InlineComponent;
