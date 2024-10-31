import './App.css'
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import ContentPage from './components/ContentPage/ContentPage.tsx';
import AdminForm from './components/AdminForm/AdminForm.tsx';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContentPage/>}/>
        <Route path="/pages/home" element={<ContentPage/>}/>
        <Route path="/pages/admin" element={<AdminForm/>}/>
        <Route path="*" element={<p className="text-center m-5">Page is not found :(</p>}/>
      </Routes>
    </>
  )
};

export default App
