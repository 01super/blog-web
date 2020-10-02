import { createContainer } from 'unstated-next';
import { useState } from 'react';

const useHomeState = () => {
  const [title, setTitle] = useState('home');
  return { title, setTitle };
};

export default createContainer(useHomeState);
