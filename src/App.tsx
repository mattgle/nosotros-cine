import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppRouter } from "./navigation/AppRouter";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <AppRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
