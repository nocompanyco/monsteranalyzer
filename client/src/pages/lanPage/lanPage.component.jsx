import React, { Fragment } from 'react';
import Header from '../../components/lan-header/lan-header.component';
import LanBody from '../../components/lan-body/lan-body.component';

export default function LanPage(props) {
  const { history } = props;
  return (
    <Fragment>
      <Header history={history} />
      <LanBody />
    </Fragment>
  );
}
