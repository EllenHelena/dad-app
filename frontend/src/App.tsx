import { BrowserRouter, Routes, Route } from "react-router-dom";
import BabyProfile from "./pages/babyprofile";
import Header from "./components/header";
import Footer from "./components/footer";
import UserProfile from "./pages/userProfile";
import HelpMe from "./components/helpMe";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/babyProfile" element={<BabyProfile />} />
            <Route path="/helpMe" element={<HelpMe />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
