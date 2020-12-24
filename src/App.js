import './App.css';
import Timer from './components/Timer/Timer';
function App() {
  return (
    <div className='App'>
      <Timer type='desktop' />
      <Timer type='mobile' />
    </div>
  );
}

export default App;
