import React from 'react';
import { CFooter } from '@coreui/react';

const Footer = () => (
  <CFooter fixed={false}>
    <div className="mfs-auto">
      <span className="ml-1">
        &copy;
        {(new Date().getFullYear()) }
        {' '}
        Daniel Pirvoaica
      </span>
    </div>
  </CFooter>
);
export default React.memo(Footer);
