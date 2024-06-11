import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionScreen from './pages/QuestionScreen';
import ResultScreen from './pages/ResultScreen';
import { Header } from '../src/component/Header'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index path='/' element={<QuestionScreen/>}/>
          <Route path='/results' element={<ResultScreen/>}/>
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
