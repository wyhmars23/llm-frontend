import React, { useState, useEffect } from "react";
import { Splitter,Button } from "antd";
import Chat1 from "./component/Chat1/Chat1";
import Sidebar from "./component/Sidebar/Sidebar";

const Llm: React.FC = () => {
  const [initialWidth, setInitialWidth] = useState<number | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialWidth(window.innerWidth / 6);
    }, 100); // 100ms延迟

    return () => clearTimeout(timer);
  }, []);

  if (initialWidth === null) {
    return null;
  }

  return (
    <div style={{ height: "100vh" }}>
      <Button
        onClick={() => setCollapsed(!collapsed)}
        style={{ position: "absolute", top: 15, left: 15, zIndex: 1 }}
      >
        {collapsed ? "展开" : "收起"}
      </Button>
      <Splitter
        style={{ height: "100%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <Splitter.Panel
          defaultSize={initialWidth}
          size={collapsed ? 0 : initialWidth}
          resizable={false}
        >
          <Sidebar />
        </Splitter.Panel>
        <Splitter.Panel>
          <Chat1 />
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default Llm;
