import './App.css';
import { Provider } from "react-redux"
import Users from './components/Users';
import configureStore from './store/configureStore';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
    <Users />
</Provider>
  );
}

export default App;
