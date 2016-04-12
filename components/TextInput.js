import React from 'react';
import { pure } from 'recompose';

const TextInput = () =>
  <input className="edit" type="text" autoFocus />;

export default pure(TextInput);
