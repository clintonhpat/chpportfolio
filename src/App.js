import './styles/App.css';
import Layout from './components/Layout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js';
import PortfolioPage from './components/PortfolioPage.js';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="portfolio" element={<PortfolioPage />}/>
          <Route path="skills" element={<SkillsPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          {/* <Route path="*" element={<NoPage />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;