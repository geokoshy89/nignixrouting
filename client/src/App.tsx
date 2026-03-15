import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch('/api/v1/hello')
      .then(response => response.json())
      .then(data => setData(data.message));
  }, []);
  return (data ? <div className="App">{data}</div> : <div className="App">Loading...</div>);
}

export default App;
