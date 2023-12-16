import React from 'react';
import MyForm from './MyForm';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MyForm />
      </ErrorBoundary>
    </div>
  );
}

export default App;