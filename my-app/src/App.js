function App(props) {
  const currDate = new Date();

  return (
  <div>
    <h1>My First App on React</h1>
    <h2>Local Time Now is {currDate.toLocaleTimeString()}.</h2>
  </div>);
}

export default App;