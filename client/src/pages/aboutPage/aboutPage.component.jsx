import React, { Fragment } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import AboutBody from '../../components/about-body/about-body.compoenet';

export default function AboutPage(props) {
  const { history } = props;

  return (
    <Fragment>
      <Header history={history} />
      <AboutBody />
    </Fragment>
  );
}
