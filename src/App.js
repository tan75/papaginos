import PizzaComponent from './components/PizzaComponent';

const App = () => {
  return (
    <div className="App">
      <h1>Best Pizza in Town</h1>
      <PizzaComponent />
      <button
        onClick={() => {
          throw new Error('Something went wrong');
        }}
      >
        Break the world
      </button>
      ;
    </div>
  );
};

export default App;
