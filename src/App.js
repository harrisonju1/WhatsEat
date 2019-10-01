import React, {Fragment} from 'react'
import GlobalHeader from './Components/GlobalHeader/GlobalHeader'
import MainFoodDisplay from './Components/MainFoodDisplay/MainFoodDisplay'
import './App.css';

function App() {
  return (
    <Fragment>
      <GlobalHeader />
      <MainFoodDisplay />
    </Fragment>
  );
}

export default App
