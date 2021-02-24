import './App.css';
import { UsersTable } from './components/UsersTable';
import { SelectedUsers } from './components/SelectedUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersTable />
        <SelectedUsers />
      </header>
    </div>
  );
}

export default App;
