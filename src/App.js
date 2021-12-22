import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import BookDetails from "./pages/BookDetails/BookDetails";
import SignUp from "./components/SignUp/SignUp";
import UserBookList from "./pages/UserBookList.js/UserBookList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/bookDetails/:id" element={<BookDetails />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/myBooksList" element={<UserBookList />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
