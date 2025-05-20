'use client';

import axios from 'axios';
import styles from './chat.module.scss';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  CardContent,
  CardOverflow,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { FormEvent, forwardRef, useImperativeHandle, useState } from 'react';
import { useFloating, autoUpdate } from '@floating-ui/react';

const Chat = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top-end',
    whileElementsMounted: autoUpdate,
  });
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    status: 'initial' | 'loading' | 'failure' | 'sent';
  }>({
    name: '',
    email: '',
    message: '',
    status: 'initial',
  });

  // open and close the chat window
  function openChat(event: React.MouseEvent<HTMLElement>) {
    if (!isOpen) {
      // open chat
      setIsOpen(true);
    } else {
      // close chat
      document.getElementById('chat_el')?.classList.remove(styles.open_chat);
      document.getElementById('chat_el')?.classList.add(styles.close_chat);
      setTimeout(() => setIsOpen(false), 500);
    }
  }

  // handles submit button press
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormData({ ...formData, status: 'loading' });

    const body = JSON.stringify({ name: formData.name, email: formData.email, message: formData.message });
    const response = await axios.post('https://f22uyn4vtfmymrei6jdxtm6f7u0xomsz.lambda-url.us-east-1.on.aws/', body);
    if (response.status === 200) {
      setFormData({ name: '', email: '', message: '', status: 'sent' });
    } else {
      setFormData({ ...formData, status: 'failure' });
    }
  }

  // safely expose the openChat function
  useImperativeHandle(ref, () => ({ openChat }));

  return (
    <CssVarsProvider defaultMode="system">
      <div className={styles.chat_button_wrapper}>
        <Button
          size="lg"
          onClick={openChat}
          className={`${styles.chat_button} blue_raised_glossy`}
          aria-label="Contact Matt"
          ref={refs.setReference}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faEnvelope} size="xl" flip="horizontal" fixedWidth />
        </Button>
      </div>

      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles}>
          <Card id="chat_el" variant="outlined" className={`${styles.chat_window} ${styles.open_chat}`}>
            <CardOverflow variant="solid" className={styles.chat_header}>
              <h3>Contact Matt</h3>
            </CardOverflow>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <FormControl className={styles.form_group}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required={true}
                  />
                </FormControl>

                <FormControl className={styles.form_group}>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required={true}
                  />
                </FormControl>

                <FormControl className={styles.form_group}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    minRows={3}
                    maxRows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required={true}
                  />
                </FormControl>

                <div className={styles.chat_footer}>
                  {formData.status === 'sent' ? (
                    <FormHelperText style={{ color: 'green' }}>Message sent!</FormHelperText>
                  ) : formData.status === 'failure' ? (
                    <FormHelperText style={{ color: 'red' }}>Message failed. Please try again soon.</FormHelperText>
                  ) : (
                    <div>&nbsp;</div>
                  )}
                  <Button
                    type="submit"
                    loading={formData.status === 'loading'}
                    disabled={formData.status === 'loading'}
                    loadingPosition="start"
                    className="custom-mui-button"
                  >
                    {formData.status === 'loading' ? (
                      <>Sending</>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} style={{ margin: '0 .5em 0 0' }} /> Send
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </CssVarsProvider>
  );
});

Chat.displayName = 'Chat';
export default Chat;
