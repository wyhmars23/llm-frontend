// import React, { useState, useEffect } from 'react';
// import { Flex, Splitter, Typography, Button } from 'antd';
import InputWindow from '../Search/Search';
import './Chat1.scss';

const Chat1 : React.FC = () => {


  return (
    <div className='main'>
        <div className='title'>AI</div>
        <div className='search'><InputWindow/></div>
    </div>
  );
}

export default Chat1;