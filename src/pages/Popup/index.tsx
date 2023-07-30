import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  return (
    <div style={{ minWidth: 300, minHeight: 500 }}>
      <div>This is a test popup</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
