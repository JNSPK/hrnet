import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Employees from './pages/employees';
import { ThemeContextProvider } from './themeContext';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/employees' element={<Employees />}></Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
