import React, { useState, useRef, useEffect } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Chat2.scss";

const { TextArea } = Input;

const Chat2: React.FC = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = () => {
    if (value.trim()) {
      setMessages([...messages, value]);
      setValue("");
    }
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(scrollTimeout);
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift + Enter 换行
      } else {
        e.preventDefault();
        addMessage();
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            {/* 根据 index 判断使用不同的 SVG */}
            {index % 2 === 0 ? (
              <>
              <div className="user">{msg}</div>
              <svg className="icon" viewBox="0 0 1024 1024" style={{marginRight:'15%'}}>
                <path
                  d="M509.44 1018.368c-141.312 0-277.504-59.904-372.736-164.352l-19.968-21.504 19.968-21.504c95.744-104.448 231.424-164.352 372.736-164.352 141.312 0 277.504 59.904 372.736 164.352l19.968 21.504-19.968 21.504c-95.232 104.448-231.424 164.352-372.736 164.352zM204.8 832.512c81.92 77.824 190.976 121.856 304.64 121.856 113.664 0 222.72-44.032 304.64-121.856-81.92-77.824-190.976-121.856-304.64-121.856-113.664 0-222.72 44.032-304.64 121.856zM509.952 600.576c-89.088 0-161.792-72.704-161.792-161.792 0-89.088 72.704-161.792 161.792-161.792s161.792 72.704 161.792 161.792c0 89.088-72.192 161.792-161.792 161.792z m0-259.584c-53.76 0-97.792 44.032-97.792 97.792s44.032 97.792 97.792 97.792 97.792-44.032 97.792-97.792-43.52-97.792-97.792-97.792z"
                  fill="#303742"
                ></path>
                <path
                  d="M119.296 719.36c-33.792-63.488-51.2-134.144-51.2-206.848 0-243.712 198.144-441.344 441.344-441.344s441.344 198.144 441.344 441.344c0 72.192-17.92 143.36-51.2 206.336 16.384 15.36 31.744 31.744 46.08 49.152 45.568-77.312 69.12-165.376 69.12-255.488 0-279.04-226.816-505.856-505.856-505.856C230.4 7.168 4.096 233.984 4.096 512.512c0 90.112 24.064 178.688 69.632 255.488 13.824-16.896 29.184-33.28 45.568-48.64z"
                  fill="#303742"
                ></path>
              </svg>
              </>
            ) : (
              <>
              <svg className="icon" viewBox="0 0 1024 1024" style={{marginLeft:'15%'}}>
                <path
                  d="M362.8 553.9c23.5 0 42.6-19.1 42.6-42.6V213.4c0-46.9 38.2-85.1 85.1-85.1s85.1 38.2 85.1 85.1V245c0 23.5 19 42.6 42.6 42.6 23.5 0 42.6-19.1 42.6-42.6v-31.5c0-93.9-76.3-170.2-170.2-170.2s-170.2 76.4-170.2 170.2v297.9c-0.2 23.5 18.8 42.5 42.4 42.5zM660.7 468.8c-23.5 0-42.6 19.1-42.6 42.6v297.9c0 46.9-38.2 85.1-85.1 85.1s-85.1-38.2-85.1-85.1v-31.5c0-23.5-19-42.6-42.6-42.6-23.5 0-42.6 19.1-42.6 42.6v31.5c0 93.9 76.3 170.2 170.2 170.2s170.2-76.4 170.2-170.2V511.4c0.1-23.5-18.9-42.6-42.4-42.6z"
                  fill="#2c2c2c"
                  p-id="12391"
                ></path>
                <path
                  d="M809.6 319.8H511.7c-23.5 0-42.6 19.1-42.6 42.6s19 42.6 42.6 42.6h297.9c46.9 0 85.1 38.2 85.1 85.1s-38.2 85.1-85.1 85.1h-31.5c-23.5 0-42.6 19.1-42.6 42.6s19 42.6 42.6 42.6h31.5c93.9 0 170.2-76.4 170.2-170.2s-76.3-170.4-170.2-170.4zM554.3 660.3c0-23.5-19-42.6-42.6-42.6H213.8c-46.9 0-85.1-38.2-85.1-85.1s38.2-85.1 85.1-85.1h31.5c23.5 0 42.6-19.1 42.6-42.6s-19-42.6-42.6-42.6h-31.5c-93.9 0-170.2 76.4-170.2 170.2s76.3 170.2 170.2 170.2h297.9c23.5 0.2 42.6-18.9 42.6-42.4z"
                  fill="#2c2c2c"
                  p-id="12392"
                ></path>
              </svg>
              <div className="ai">{msg}</div>
              </>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here... (Enter to send, Shift + Enter for newline)"
          autoSize={{ minRows: 1, maxRows: 6 }}
          style={{ width: "50%", marginRight: "10px" }}
          size="large"
        />
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<SearchOutlined />}
          onClick={addMessage}
        />
      </div>
    </div>
  );
};

export default Chat2;
