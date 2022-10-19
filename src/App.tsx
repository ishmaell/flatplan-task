import React, { Suspense, lazy } from 'react';
import { CircleLoader } from './components/ui/loader';

const UnauthenticatedApp = lazy(
  () => import('./components/unauthenticated-router')
);
const App = () => {
  return (
    <Suspense fallback={<CircleLoader />}>
      <div className="app">
        <UnauthenticatedApp />
      </div>
    </Suspense>
  );
};

export default App;
