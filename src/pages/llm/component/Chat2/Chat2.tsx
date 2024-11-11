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
      // 只有在消息内容非空时才提交
      setMessages([...messages, value]);
      setValue(""); // 清空输入框
    }
  };

  // 当消息更新时，自动滚动到底部
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    console.log("scrollTimeout", messages);
    return () => clearTimeout(scrollTimeout);
  }, [messages]);

  // 键盘事件处理：Shift + Enter 换行，Enter 提交
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift + Enter 换行
        setValue(value);
      } else {
        // Enter 提交消息
        e.preventDefault(); // 阻止换行
        addMessage();
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="user" key={index}>{msg}</div>
        ))}
        <div ref={messagesEndRef} /> {/* 用于自动滚动到底部 */}
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
