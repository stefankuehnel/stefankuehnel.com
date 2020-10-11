import styles from './Button.module.css';

const Button = ({ type = 'submit', text }) => {
  return (
    <>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
