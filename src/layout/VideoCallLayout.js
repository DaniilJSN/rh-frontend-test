import React, { useEffect, useState } from 'react';
import UserAvatar from '../components/UserAvatar/UserAvatar';
import BreadCrumb from '../features/Breadcrumb/Breadcrumb';
import {
  observePageSize,
  resetPageSizeProps,
  setPageSizeProps,
} from '../services/pageSizeService';
import { getUserInfo } from '../services/userService';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './layout.scss';

const VideoCallLayout = ({ children, footerChildren }) => {
  const [user, setUser] = useState({ name: '', photo: {} });

  useEffect(() => {
    (async () => {
      setUser(await getUserInfo());
    })();
  }, []);

  useEffect(() => {
    setPageSizeProps();
    window.addEventListener('resize', observePageSize);

    return () => {
      resetPageSizeProps();
      window.removeEventListener('resize', observePageSize);
    };
  }, []);

  return (
    <div className="layout layout-video-call">
      <Header className="layout-header center-align">
        <UserAvatar photo={user.photo} name={user.name} />
        <BreadCrumb />
      </Header>
      <div className="layout-body">{children}</div>
      <Footer className="center-align">{footerChildren}</Footer>
    </div>
  );
};

export default VideoCallLayout;
