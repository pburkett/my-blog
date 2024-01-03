import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DarkModeButton } from './ui/DarkModeButton';
import { GitHubIconLink } from './ui/GitHubIconLink';
import { globalCss, styled } from './stitches.config';

const AppContainer = styled('div', {
  maxWidth: '540px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <h1>Coming soon</h1>
    </AppContainer>
  );
};
