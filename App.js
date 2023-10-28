import Navigation from "./Navigation/Navigation";
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Component/app/store';
export default function App() {
  return (
    <Provider store = {store}>
      <Navigation />
    </Provider>
  )
}

