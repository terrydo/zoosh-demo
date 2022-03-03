import React from 'react';
import { mergeStrings } from 'src/common/utils/string';
import styles from './styles.module.css';

interface AppHeadingProps extends React.HTMLAttributes<HTMLElement> {
  level?: number | string;
}

const AppHeading = (_props: AppHeadingProps) => {
  const { level = 2, className, ...props } = _props;

  const HeadingTag = React.createElement(`h${level}`, {
    ...props,
    className: mergeStrings(styles.heading, className),
  });

  return HeadingTag;
};

export default AppHeading;
