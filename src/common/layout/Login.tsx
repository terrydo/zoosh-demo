import React from 'react';

const LayoutLogin: React.FC = ({ children }) => {
  return (
    <div className="h-[100vh] overflow-auto flex items-center bg-gray">
      <div className="container" children={children} />
    </div>
  );
};

export default LayoutLogin;
