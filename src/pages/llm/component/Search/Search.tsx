import React from 'react';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const InputWindow: React.FC = () => (
  <Space direction="vertical">
    <Search 
      placeholder="input search text" 
      onSearch={onSearch} 
      enterButton 
      size="large" 
      style={{ width: 600 }} // 自定义宽度为400px
    />
  </Space>
);

export default InputWindow;
