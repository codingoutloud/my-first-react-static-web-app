import React from 'react';

function App() {
  var date = new Date();
  const clock = '⏰';
  // blind spot for internationalization - can we detect in a Playwright test that uses different browser settings?
  return <div>Right now is {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} @ {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} {clock}</div>;
}

export default App;
