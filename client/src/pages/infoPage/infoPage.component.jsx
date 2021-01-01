import React, { Fragment ,useState} from 'react';
import Header from '../../components/pages-header/pages-header.component';
import InfoBody from '../../components/info-body/info-body.component';

export default function InfoPage(props) {
  const { history } = props;
 
  return (
    <Fragment>
      <Header history={history} />
      <InfoBody />
    </Fragment>
  );
}
