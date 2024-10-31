import './App.css'
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage/ContentPage.tsx';
import NewPage from './containers/NewPage/NewPage.tsx';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContentPage/>}/>
        <Route path="/pages/:id" element={<ContentPage/>}/>
        <Route path="/pages/admin" element={<NewPage/>}/>
        <Route path="*" element={<p className="text-center m-5">Page is not found :(</p>}/>
      </Routes>
    </>
  )
};

export default App
