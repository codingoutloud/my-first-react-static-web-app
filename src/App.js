import React from 'react';

function App() {
  const clock = '⏰';
  var date = new Date();
  
  var x = 1 / (date.getSeconds() % 4 - 3); // on time in 4 will cause divide by zero error
  
  // blind spot for internationalization - can we detect in a Playwright test that uses different browser settings?
  return <div>Hello World! Right now is {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} @ {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}! {clock}</div>;
}

export default App;
