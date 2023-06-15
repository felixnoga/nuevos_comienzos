import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FcLandscape } from 'react-icons/fc';
export default function Actividades() {
  return (
    <>
      <Row>
        <Col>
          <h3>
            {' '}
            <FcLandscape /> Ocio y Actividades
          </h3>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Image src='ocio_page.jpg' fluid></Image>
        </Col>
        <Col>
          <p>
            Madrid es una ciudad con mucha historia y cultura.Existen variedad
            de actividades que podemos hacer en esta ciudad y que van desde
            visitar un museo a asistir a una representación teatral,Muchas de
            estas actividades cuentan con descuentos o incluso puedes encontrar
            algunas completamente gratuitas.
          </p>
          <ListGroup className='mt-3'>
            <ListGroup.Item variant='dark'>Enlaces de interés</ListGroup.Item>
            <ListGroup.Item>
              <a href='https://www.comunidad.madrid/cultura/oferta-cultural-ocio'>
                Oferta cultural y de ocio | Comunidad de Madrid
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href='https://www.madridcultura.es/eventos-gratuitos'>
                GRATUITO | Eventos - Madrid Cultura
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
