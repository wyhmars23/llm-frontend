import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";
import type { GetProps } from "antd";
import './Chat1.scss';

type SearchProps = GetProps<typeof Input.Search>;

// 常量 options 列表
const staticOptions = [
  { value: "Burns Bay Road" },
  { value: "Downing Street" },
  { value: "Wall Street" },
];

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const InputWindow: React.FC = () => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<AutoCompleteProps["options"]>([]);

  const handleSearch = (value: string) => {
    // 根据输入动态设置选项
    setAutoCompleteOptions(
      staticOptions.filter(option =>
        option.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <AutoComplete
      style={{ width: 600 }}
      options={autoCompleteOptions}
      onSearch={handleSearch}
    >
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        size="large"
      />
    </AutoComplete>
  );
};



const Chat1 : React.FC = () => {
  return (
    <div className='main'>
        <div className='title'>AI</div>
        <div className='search'><InputWindow/></div>
    </div>
  );
}

export default Chat1;