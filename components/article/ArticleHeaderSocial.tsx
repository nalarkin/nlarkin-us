import React from 'react';

import { FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { IoIosMail, IoMdShareAlt } from 'react-icons/io';

import style from './ArticleHeaderSocial.module.scss';

interface CircleGrayButtonProps {
  children: React.ReactElement;
}
const CircleGrayButton = ({ children }: CircleGrayButtonProps) => {
  return <div className={style.circleButton}>{children}</div>;
};

const ArticleSocialBar = () => {
  return (
    <div className={style.socialBarContainer}>
      <div className={style.socialBarGrid}>
        <CircleGrayButton>
          <FaFacebookF />
        </CircleGrayButton>
        <CircleGrayButton>
          <FaWhatsapp size={20} />
        </CircleGrayButton>
        <CircleGrayButton>
          <FaTwitter />
        </CircleGrayButton>
        <CircleGrayButton>
          <IoIosMail size={20} />
        </CircleGrayButton>
        <CircleGrayButton>
          <IoMdShareAlt size={20} />
        </CircleGrayButton>
      </div>
    </div>
  );
};

export default ArticleSocialBar;
