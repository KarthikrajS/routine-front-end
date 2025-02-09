import React from 'react';
import { UserProvider } from './UserContext';
import { DataStorageProvider } from './DataStorageContext';
import { ThemeProvider } from './ThemeContext';
import { MoodProvider } from './MoodContext';
import { RoutineProvider } from './RoutineContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const ContextProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <MoodProvider>
      <GoogleOAuthProvider clientId="951190317533-5i7qnra1drubaoi59559oss8eht8b7u7.apps.googleusercontent.com">
        <UserProvider>
          <RoutineProvider>
            <DataStorageProvider>{children}</DataStorageProvider>
          </RoutineProvider>
        </UserProvider>
        </GoogleOAuthProvider>
      </MoodProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
