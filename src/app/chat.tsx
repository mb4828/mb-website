'use client';

import styles from './chat.module.scss';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popper } from '@mui/base';
import { Avatar, Button, Card, CardOverflow, Textarea } from '@mui/joy';
import { useState } from 'react';

// mini state machine for the chat
enum ConversationState {
  AwaitMessage,
  MessageReceived,
  AwaitName,
  NameReceived,
  AwaitEmail,
  EmailReceived,
  Closed,
}

export default function Chat() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const [conversationEl, setConversationEl] = useState<HTMLElement | null>(null);
  const [conversationState, setConversationState] = useState(ConversationState.AwaitMessage);
  const [conversationMessage, setConversationMessage] = useState('');
  const [conversationName, setConversationName] = useState('');
  const [conversationEmail, setConversationEmail] = useState('');
  const [conversationTextarea, setConversationTextarea] = useState<HTMLTextAreaElement | null>(null);

  // open and close the chat window
  function openChat(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  function _advanceConversationHelper(amount: number) {
    setConversationState(conversationState + amount);
    conversationEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }

  // advance the conversation and record messages from the user
  function advanceConversation(e: any) {
    e.preventDefault();
    e.stopPropagation();

    if (
      conversationTextarea &&
      conversationTextarea.value.trim().length > 0 &&
      (e.type === 'submit' || (e.type === 'keyup' && e.key === 'Enter' && !e.shiftKey))
    ) {
      const value = conversationTextarea?.value || '';
      if (conversationState >= ConversationState.Closed) {
        return;
      } else if (conversationState === ConversationState.AwaitMessage) {
        setConversationMessage(value);
      } else if (conversationState === ConversationState.AwaitName) {
        setConversationName(value);
      } else if (conversationState === ConversationState.AwaitEmail) {
        setConversationEmail(value);
      }

      if (conversationTextarea) {
        conversationTextarea.value = ''; // clear input
      }
      _advanceConversationHelper(1); // show user input
      setTimeout(() => _advanceConversationHelper(2), 1000); // show response
    }
  }

  // hide messages until conversation has reached a certain state
  function hideChatUntil(state: ConversationState) {
    return conversationState < state ? styles.hidden : '';
  }

  return (
    <>
      <div className={styles.chat_button_wrapper}>
        <Button size="lg" onClick={openChat} className={styles.chat_button} aria-label="Contact Me">
          <FontAwesomeIcon icon={isOpen ? faXmark : faMessage} size="xl" flip="horizontal" fixedWidth />
        </Button>
      </div>

      <Popper open={isOpen} anchorEl={anchorEl} placement="top-end">
        <Card variant="outlined" className={styles.chat_window}>
          <CardOverflow className={styles.chat_header}>Contact Me</CardOverflow>

          <CardOverflow className={styles.chat_messages}>
            <div className={styles.message_sent}>
              <Avatar src="matt_bk.jpg" />
              <div className={styles.message}>
                <Card variant="soft" size="sm">
                  Thanks for visiting! Send me a chat if you&apos;d like to get in touch
                </Card>
                <small>Matt</small>
              </div>
            </div>

            <div className={`${styles.message_response} ${hideChatUntil(ConversationState.MessageReceived)}`}>
              <div className={styles.message}>
                <Card variant="solid" size="sm" style={{ background: '#17233d' }}>
                  {conversationMessage}
                </Card>
                <small>Me</small>
              </div>
            </div>

            <div className={`${styles.message_sent} ${hideChatUntil(ConversationState.AwaitName)}`}>
              <Avatar src="matt_bk.jpg" />
              <div className={styles.message}>
                <Card variant="soft" size="sm">
                  Please provide your name
                </Card>
                <small>Matt (Automated)</small>
              </div>
            </div>

            <div className={`${styles.message_response} ${hideChatUntil(ConversationState.NameReceived)}`}>
              <div className={styles.message}>
                <Card variant="solid" size="sm" style={{ background: '#17233d' }}>
                  {conversationName}
                </Card>
                <small>Me</small>
              </div>
            </div>

            <div className={`${styles.message_sent} ${hideChatUntil(ConversationState.AwaitEmail)}`}>
              <Avatar src="matt_bk.jpg" />
              <div className={styles.message}>
                <Card variant="soft" size="sm">
                  Please provide your e-mail address
                </Card>
                <small>Matt (Automated)</small>
              </div>
            </div>

            <div className={`${styles.message_response} ${hideChatUntil(ConversationState.EmailReceived)}`}>
              <div className={styles.message}>
                <Card variant="solid" size="sm" style={{ background: '#17233d' }}>
                  {conversationEmail}
                </Card>
                <small>Me</small>
              </div>
            </div>

            <div className={`${styles.message_sent} ${hideChatUntil(ConversationState.Closed)}`}>
              <Avatar src="matt_bk.jpg" />
              <div className={styles.message}>
                <Card variant="soft" size="sm">
                  Your message has been sent. I&apos;ll respond via e-mail as soon as I can. This conversation is now
                  closed
                </Card>
                <small>Matt (Automated)</small>
              </div>
            </div>

            <div ref={(el) => setConversationEl(el)} />
          </CardOverflow>

          <CardOverflow variant="soft" className={styles.chat_footer}>
            <form onSubmit={advanceConversation}>
              <Textarea
                ref={(ref) => setConversationTextarea(ref?.firstChild as HTMLTextAreaElement)}
                onKeyUp={advanceConversation}
                placeholder={
                  conversationState === ConversationState.Closed
                    ? 'Conversation closed'
                    : conversationState % 2 !== 0
                    ? 'Loading...'
                    : 'Type a message'
                }
                size="sm"
                maxRows={3}
                disabled={conversationState % 2 !== 0 || conversationState === ConversationState.Closed}
              />

              <Button
                type="submit"
                size="sm"
                variant="solid"
                style={{ background: '#17233d' }}
                disabled={conversationState % 2 !== 0 || conversationState === ConversationState.Closed}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </form>
          </CardOverflow>
        </Card>
      </Popper>
    </>
  );
}
