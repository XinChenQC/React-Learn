import { useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Workflow from "./Pages/Workflow";

function App() {
  const location = useLocation();
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Workflow className="w-full h-full" />
      <div className="fixed top-0 left-0">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
