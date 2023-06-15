import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardServicio({ title, texto, imagen, buttonText, ruta }) {
  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Img variant='top' src={imagen} />
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={ruta} className='btn btn-secondary mx-auto'>
          {buttonText}
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardServicio;
