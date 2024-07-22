import { Spinner } from '@nextui-org/react';
import React from 'react';

export default function Loader() {
  return (
    <>
      <Spinner label='Loading' color='warning' size='lg' />
    </>
  );
}
