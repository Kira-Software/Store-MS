import AllRoutes from "./routes";
import "antd/dist/antd.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}

export default App;
