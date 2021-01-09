import React, { Fragment } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import LanBody from '../../components/lan-body/lan-body.component';

export default function LanPage(props) {
  const { history } = props;
  return (
    <Fragment key='lanPage'>
      <Header history={history} />
      <LanBody />
    </Fragment>
  );
}
