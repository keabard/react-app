import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

it('should display App container', () => {
  const { container } = render(<App />);
  const appDiv = container.querySelector('.App');
  expect(appDiv).toBeInTheDocument();
});

it('should query and display beers', async () => {
  const { findByText } = render(<App />);
  const beer = await findByText('Buzz');
  expect(beer).toBeInTheDocument();

  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  })
  //https://github.com/testing-library/react-testing-library#complex-example
});
