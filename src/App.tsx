import "./App.css";
import AppRoute from "./route/AppRoute";

import { AuthProvider } from "./Context/AuthContext";


function App() {
  return (
    <>
    <AuthProvider>
      <AppRoute />
  
      </AuthProvider>
    </>
  );
}

export default App;
