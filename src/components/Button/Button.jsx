import styles from "./Button.module.css";

function Button({text, incrementOnClick}) {
  return (
    <button class={styles.button} onClick={incrementOnClick}>{text}</button>
  )
}


export default Button