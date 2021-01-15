import React from 'react';
import Header from '../../components/pages-header/pages-header.component';
import LanBody from '../../components/lan-body/lan-body.component';
import './lanPage.styles.css'

export default function LanPage(props) {
  const { history } = props;
  return (
    <div id='lanPage' className='lanConatiner'>
      <Header history={history} />
      <LanBody />
    </div>
  );
}
