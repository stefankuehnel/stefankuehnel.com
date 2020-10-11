import { CommentIcon, MailIcon, NoteIcon, SmileyIcon } from '@primer/octicons-react';

const Icon = ({ name }) => {
  // Set the default size of the icons.
  const defaultSize = 16;

  switch (name) {
    case 'name':
      return <SmileyIcon size={defaultSize} />;

    case 'email':
      return <MailIcon size={defaultSize} />;

    case 'subject':
      return <NoteIcon size={defaultSize} />;

    case 'message':
      return <CommentIcon size={defaultSize} />;

    default:
      return null;
  }
};

export default Icon;
