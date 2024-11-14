import React from "react";
import { OpenAIOutlined, CalendarOutlined } from '@ant-design/icons';
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  // 模拟一些历史记录数据
  const history = [
    { title: 'Chat with Alice', date: '2024-11-01' },
    { title: 'Meeting with Bob', date: '2024-11-02' },
    { title: 'Project Discussion', date: '2024-11-03' },
    { title: 'Code Review with Sarah', date: '2024-11-04' }
  ];

  return (
    <div className='sidebar'>
      <div className='new'>
        <OpenAIOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
        Start a new chat
      </div>
      <div className='history'>
        <h3>历史记录</h3>
        {history.map((item, index) => {
          return (
            <div className='history-item' key={index}>
              <CalendarOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
