import React from 'react';
import { Childcmp } from './child';

export function ParentComponent() {
  const data = "you are my child";
  return <Childcmp data={data}/>;
}