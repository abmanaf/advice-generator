import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState("");

  const info = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    fetch(info)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logs the entire JSON object to the console
        setList(data); // Optionally, you can update the state with the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>App</div>
  );
}

export default App;
