import React, { Fragment } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import InfoBody from '../../components/info-body/info-body.component';

export default function InfoPage(props) {
  const { history } = props;
  const data = [
    {
      id: 1,
      header: 'Connection Info',
      descrption: 'Your Network Connection Informations',
    },
    {
      id: 2,
      header: 'Scanner configuration ',
      descrption: 'Detialed Scanner confirgration',
    },
  ];
// infobody which containes the collaspe panel
  return (
    <Fragment>
      <Header history={history} />
      {data.map((panel) => (
        <InfoBody
          key={panel.id}
          header={panel.header}
          descrption={panel.descrption}
          id={panel.id}
        />
      ))}
    </Fragment>
  );
}
