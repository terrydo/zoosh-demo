import React from 'react';
import { NamedLink } from 'react-named-router';
import Logo from 'src/common/assets/images/zoosh.jpg';

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  return (
    <header className="text-center">
      <NamedLink to="HomePage">
        <img src={Logo} alt="Zoosh Demo" className="inline-block" />
      </NamedLink>
    </header>
  );
};

export default Header;
