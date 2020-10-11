import classnames from 'classnames';

import styles from './TextArea.module.css';

const TextArea = ({ icon, type = 'text', rows = 6, name, placeholder }) => {
  // Add icon to the textarea component if an icon is available.
  // Return empty JSX element otherwise.
  const TextAreaIcon = icon ? <div className={styles.icon}>{icon}</div> : <></>;

  // Indent text of textarea if no icon is available.
  const _className = icon ? styles.textarea : classnames(styles.textarea, styles.indentText);

  return (
    <>
      <div className={styles.box}>
        {TextAreaIcon}
        <textarea
          className={_className}
          name={name}
          type={type}
          placeholder={placeholder}
          rows={rows}
        />
      </div>
    </>
  );
};

export default TextArea;
