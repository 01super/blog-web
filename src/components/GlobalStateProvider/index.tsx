import React from 'react';
import { Container } from 'unstated-next';

import home from '@/store/home';

const compose = (containers: Array<Container<any, any>>, children: JSX.Element): JSX.Element =>
  containers.reduce((ele, wrapper) => <wrapper.Provider>{ele}</wrapper.Provider>, children);

const GlobalStateProvider: React.ElementType = ({ children }): JSX.Element =>
  compose([home], children);

export default GlobalStateProvider;
