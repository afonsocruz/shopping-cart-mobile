import React from 'react';
import { Layout } from './src/components';
import NavigationRoutes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationRoutes>
      <Layout /> 
    </NavigationRoutes>
  )
}

export default App;