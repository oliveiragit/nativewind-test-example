import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { BlackViewWhiteText } from '~/components/BlackViewWhiteText';
import { ScreenContent } from '~/components/ScreenContent';
import './global.css';
export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx">
        <BlackViewWhiteText />
      </ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
