import React from "react";
import styles from './shopping-list-buttons.css';

const Buttons = props => {
  return <div className="test">
    <h1 className={styles.title}>{ props.applicationName }</h1>
    <div className={styles.titleSub}>{ props.applicationDescription }</div>
  </div>
}
export default Buttons;