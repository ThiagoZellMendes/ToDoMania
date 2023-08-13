import React from 'react';

import { Container } from './styles';
import { Props } from './props';

export function Input({...rest}) {
  return (
    <Container {...rest}/>
  )
}