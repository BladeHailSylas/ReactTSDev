import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Navbar } from "./components/common/Navbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import { AuthProvider } from "./components/AuthProvider";
import Layout from "./components/common/Layout";
import PlayerListPage from "./pages/PlayerListPage";
import PredictionPage from "./pages/PredictionPage";
import ErrorPage from "./pages/ErrorPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div data-theme="dark">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/players" element={<PlayerListPage />} />
              <Route path="/players/:id" element={<ProfilePage />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/predictions" element={<PredictionPage />} />
              <Route path="/error/:status" element={<ErrorPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
