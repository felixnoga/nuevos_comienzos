import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Topmenu from '../Topmenu';

export default function RootLayout() {
  return (
    <>
      <Topmenu />
      <Container className='pt-5'>
        <Outlet />
      </Container>
    </>
  );
}
