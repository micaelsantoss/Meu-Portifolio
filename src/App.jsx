import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { ProjectDetails } from "./pages/projectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    
  },
  {
    path: "/projeto/:id",
    element: <ProjectDetails/>
    
  }
]);

export { router };