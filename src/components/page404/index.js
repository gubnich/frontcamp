import React from 'react';
import './style.css';
import { PAGE404_MESSAGE, HOMEPAGE_LINK } from '../../constants';

const Page404 = () => (
  <div className='page404'>
    <span>404</span>
    <span>{PAGE404_MESSAGE}</span>
    <a href='/' className='homepageLink'>{HOMEPAGE_LINK}</a>
  </div>
)

export default Page404;
