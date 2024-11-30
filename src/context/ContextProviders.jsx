import React from 'react';
import { UserProvider } from './UserContext';
import { DataStorageProvider } from './DataStorageContext';
import { ThemeProvider } from './ThemeContext';
import { MoodProvider } from './MoodContext';
import { RoutineProvider } from './RoutineContext';

const ContextProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <MoodProvider>
        <UserProvider>
          <RoutineProvider>
            <DataStorageProvider>{children}</DataStorageProvider>
          </RoutineProvider>
        </UserProvider>
      </MoodProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
