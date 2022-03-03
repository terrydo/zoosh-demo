import React from 'react';
import AppHeader from '../components/Header';

const LayoutDefault: React.FC = (props: any) => {
  return (
    <div className="container p-8">
      <AppHeader />

      <div {...props} className="py-10 flex-1"></div>
    </div>
  );
};

export default LayoutDefault;
