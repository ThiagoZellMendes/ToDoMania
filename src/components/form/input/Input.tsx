import React from 'react';

import { Container } from './styles';


export function Input({...rest}) {
  return (
    <Container 
      placeholder={"Adicione uma nova tarefa"}
      placeholderTextColor={"white"}
      style={{paddingLeft: 16}}
    {...rest}
    />
  )
}