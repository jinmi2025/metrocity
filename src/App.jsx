import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccountRoutes, ProdutRoutes } from './routes';
import { AuthProvider } from './data';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './pages/main';
import { SearchResults } from './pages/search';
import './App.css';

const Layout = () => {
  return (
    <div id='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/account/*' element={<AccountRoutes />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/product/*' element={<ProdutRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
