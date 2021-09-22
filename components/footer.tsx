import React from 'react';

const FooterUpperLinks = () => {
  return <div>footer upper</div>;
};
const FooterLower = () => {
  return <div>footer lower</div>;
};

const Footer = () => {
  return (
    <footer>
      <FooterUpperLinks /> <FooterLower />
    </footer>
  );
};

export default Footer;
