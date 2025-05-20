'use client';

import { useRef } from 'react';
import Chat from './chat';
import { ChatContext } from './chat-context';
import Footer from './footer';
import Header from './header';

export default function BaseComponent({ children }: { children: React.ReactNode }) {
  const chatRef = useRef<{ openChat: () => void }>(null);

  return (
    <ChatContext.Provider value={{ openChat: () => chatRef.current?.openChat() }}>
      <Header />
      {children}
      <Footer />
      <Chat ref={chatRef} />
    </ChatContext.Provider>
  );
}
