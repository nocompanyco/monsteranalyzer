import React, { Fragment } from 'react';
import InfoBody from './info-body/info-body.component';
import './infoPage.styles.css';

export default function InfoPage() {
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
      <div id="info-body" className="info-body">
        {data.map((panel) => (
          <InfoBody
            key={panel.id}
            header={panel.header}
            descrption={panel.descrption}
            id={panel.id}
          />
        ))}
      </div>
    </Fragment>
  );
}
