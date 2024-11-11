import React, { useState, useRef, useEffect } from 'react';
import { Input } from 'antd';
import './Chat2.scss';

const { TextArea } = Input;

const Chat2: React.FC = () => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = () => {
    setMessages([...messages, value]);
    setValue('');
  };

  // 当消息更新时，自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
        <div ref={messagesEndRef} /> {/* 用于自动滚动到底部 */}
      </div>
      <div className="input-container">
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onPressEnter={addMessage}
          placeholder="Type your message here..."
          autoSize={{ minRows: 1, maxRows: 6 }}
          style={{ width: '700px' }}
          size='large'
        />
      </div>
    </div>
  );
};

export default Chat2;
