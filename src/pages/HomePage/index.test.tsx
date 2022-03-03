import React from 'react';
import { render, screen } from '@testing-library/react';
import client from '../../setupApolloClient';
import { ApolloProvider } from '@apollo/client';

import HomePage from './index';

describe('Home page test suite', () => {
  test('Should render the search title', async () => {
    render(
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
    );
    const title = await screen.findByText(/search for movies/g);
    expect(title).toBeInTheDocument();
  });
});
