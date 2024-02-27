import Layout from "./Components/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from "./Pages/About";
import Home from "./Pages/Home";
import { Contacts } from "./Pages/Contacts";
import Film from "./Components/Film";
import NotFound from "./Pages/NotFound";
import CategoryPage from "./Pages/CategoryPage";
import MealPage from "./Pages/Mealpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:name" element={<CategoryPage />} />
            <Route path="meal/:id" element={<MealPage />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
