import styles from './Headline.module.css';

/**
 * Creates a new heading with an anchor.
 * Source: https://bit.ly/2QlEFBL
 * @param {*} props
 */
const Headline = (props) => {
  /* The actual content of the headline. */
  const nodeValue = props.value;

  /* Replaces spaces with an underscore. */
  const id = nodeValue.toLowerCase().split(' ').join('_');

  /* Inserts a hash at the beginning of the ID to be used in the URL. */
  const anchor = id.replace(/^/, '#');

  return (
    <>
      <h2 className={styles.headline} id={id}>
        {nodeValue}
        <a className={styles.anchor} href={anchor}>
          ¶
        </a>
      </h2>
    </>
  );
};

export default Headline;
