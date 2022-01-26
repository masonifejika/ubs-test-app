import React from 'react';
import ApplicationProvider from './context/ApplicationProvider';
import PageHeader from './components/PageHeader';
import ApplicationList from './components/ApplicationList';
import SidePanel from './components/SidePanel';

const App: React.FC = () => {
  return (
    <ApplicationProvider>
      <PageHeader />
      <SidePanel />
      <ApplicationList />
    </ApplicationProvider>
  );
}

export default App;
