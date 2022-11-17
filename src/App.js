import React from 'react';

function App() {
  const clock = '⏰';
  var date = new Date();
  
  const failEveryNSeconds = 4;
  let n = date.getSeconds();
  if (n % failEveryNSeconds === 0)
    throw new Error(`Something "bad" happened (1 of every {failEveryNSeconds} seconds}).`);
  
  // blind spot for internationalization - can we detect in a Playwright test that uses different browser settings?
  return <div>Hello World! [{n}/{failEveryNSeconds}] Right now is {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()} @ {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}! {clock}</div>;
}

export default App;
