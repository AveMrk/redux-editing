import './App.css';
import Add from './components/Add';
import List from './components/List';
import Filter from './components/Filter';

function App() {
  return (
    <div className="container">
      <div className='sidebar'>
        <Filter></Filter>
        <Add></Add>
      </div>
      <div class="main-content">
      <List></List>
      </div>
  </div>
  );
}
export default App;
