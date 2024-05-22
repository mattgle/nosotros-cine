import Navbar from "./components/Navbar/Navbar";
import { AppRouter } from "./navigation/AppRouter";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <AppRouter />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
