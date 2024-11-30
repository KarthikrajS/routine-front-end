import React, { createContext, useState, useContext } from 'react';

// Create the Data Storage Context
const DataStorageContext = createContext();

// Provider component
export const DataStorageProvider = ({ children }) => {
  const [data, setData] = useState({}); // Initial data state

  const updateData = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const clearData = () => setData({}); // Clear all data

  return (
    <DataStorageContext.Provider value={{ data, updateData, clearData }}>
      {children}
    </DataStorageContext.Provider>
  );
};

// Custom hook to use Data Storage Context
export const useDataStorage = () => {
  return useContext(DataStorageContext);
};
