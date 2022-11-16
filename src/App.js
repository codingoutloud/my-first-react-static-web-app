import React from 'react';

function App() {
  var date = new Date();

  // blind spot for internationalization - can we detect in a Playwright test that uses different browser settings?
  return <div>Today is {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}</div>;
}

export default App;
