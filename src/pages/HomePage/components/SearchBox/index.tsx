import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import styles from './styles.module.css';
import { mergeStrings } from 'src/common/utils/string';

const SearchBox = (_props: TextFieldProps) => {
  const { className, ...props } = _props;
  return (
    <TextField
      {...props}
      className={mergeStrings(styles.searchBox, className)}
    />
  );
};

export default SearchBox;
