import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Programas from './pages/Programas';
import Transportes from './pages/Transportes';
import Actividades from './pages/Actividades';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'servicios',
        element: <Servicios />,
      },
      {
        path: 'programas',
        element: <Programas />,
      },
      {
        path: 'transportes',
        element: <Transportes />,
      },
      {
        path: 'actividades',
        element: <Actividades />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
