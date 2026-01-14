import { Route, Routes } from 'react-router-dom';

import { HeaderProvider } from './components/helpers/HeaderProvider';
import { GlobalProvider } from './components/helpers/GlobalProvider';

import { Header } from './components/Header/Header';
import { SearchBox } from './components/SearchBox/SearchBox';

import { Home } from './pages/Home/Home';
import { Content } from './pages/Content/Content';
import { Favorites } from './pages/Favorites/Favorites';
import { Search } from './pages/Search/Search';

import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <GlobalProvider>
      <HeaderProvider>
        <Header />
        <SearchBox />
      </HeaderProvider>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/content/:id' element={<Content />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </div>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
