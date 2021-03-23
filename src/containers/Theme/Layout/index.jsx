import React from 'react';
import Header from '../Header/Loadable';
import Content from '../Content/Loadable';
import Footer from '../Footer/Loadable';
import Sidebar from '../Sidebar/Loadable';

const Layout = () => (
  <div className="c-app c-default-layout">
    <Sidebar />
    <div className="c-wrapper">
      <Header />
      <div className="c-body">
        <Content />
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
