import { useEffect } from "react";
import { fetchUsers } from "./utils/api";
import UsersPage from "./pages/UserPage.jsx";

function App() {
  useEffect(() => {
    fetchUsers().then((data) => console.log("Custom API Function:", data));
  }, []);

  return (
    <div>
      <UsersPage
      />
    </div>
  );
}

export default App;
