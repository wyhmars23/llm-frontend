import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Llm from './pages/llm/index';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Llm  />} />
      {/* 其他路由... */}
    </Routes>
  );
};

export default AppRoutes;
