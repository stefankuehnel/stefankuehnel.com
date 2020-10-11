import classnames from 'classnames';

import styles from './Input.module.css';

const Input = ({ icon, type = 'text', name, placeholder }) => {
  // Add input icon to the input component if an icon is available.
  // Return empty JSX element otherwise.
  const InputIcon = icon ? <div className={styles.icon}>{icon}</div> : <></>;

  // Indent text of input if no icon is available.
  const _className = icon ? styles.input : classnames(styles.input, styles.indentText);

  return (
    <>
      <div className={styles.box}>
        {InputIcon}
        <div className={styles.wrapper}>
          <input className={_className} name={name} type={type} placeholder={placeholder} />
        </div>
      </div>
    </>
  );
};

export default Input;
