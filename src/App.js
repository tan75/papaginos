import PizzaComponent from './components/PizzaComponent';

const App = () => {
  return (
    <div className="App">
      <h1>Best Pizza in Town</h1>
      <h2>Staging</h2>
      <PizzaComponent />
      <button onClick={methodDoesNotExist}>Break the world</button>;
    </div>
  );
};

export default App;
