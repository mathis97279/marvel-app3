//import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import routes from './route';

// Create a router that uses the client side history strategy for
//const router = createBrowserRouter(routes)

//export default function App() {
 // return (
 //   <RouterProvider router={router} />
//  );
//}

import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

// Create a router that uses the client side history strategy for
const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;


