import React from 'react';
import styles from './summary.module.css';
import { truncate } from 'lodash';

const MovieSummary = ({ summary }: { summary?: string }) => {
  const text = truncate(summary, {
    length: 120,
  });
  return (
    <div className={styles.summary}>
      {text || 'No info was found about the movie'}
    </div>
  );
};

export default MovieSummary;
