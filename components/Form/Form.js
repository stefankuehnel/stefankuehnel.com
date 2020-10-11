import classnames from 'classnames';

import Button from '../Button/Button';
import Icon from '../Icons/Icons';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import styles from './Form.module.css';

const Form = () => {
  // Define the input icons of the form inputs.
  const nameIcon = <Icon name="name" />;
  const emailIcon = <Icon name="email" />;
  const subjectIcon = <Icon name="subject" />;
  const messageIcon = <Icon name="message" />;

  return (
    <>
      <form className={styles.form}>
        <div className={classnames(styles.columns)}>
          <Input icon={nameIcon} name="name" placeholder="Name" />
          <Input icon={emailIcon} name="email" placeholder="E-Mail" type="email" />
        </div>
        <div className={styles.row}>
          <Input icon={subjectIcon} name="subject" placeholder="Subject" />
        </div>
        <div className={styles.row}>
          <TextArea icon={messageIcon} name="message" placeholder="Type your message here..." />
        </div>
        <div className={styles.row}>
          <Button text="Send" />
        </div>
      </form>
    </>
  );
};

export default Form;
