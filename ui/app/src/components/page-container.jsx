import React, { Fragment } from 'react';

export default function PageContainer(props: any) {
  return (
    <Fragment>
      <div>{props.children}</div>
    </Fragment>
  );
}
