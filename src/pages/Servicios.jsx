import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FcDataRecovery } from 'react-icons/fc';

export default function Servicios() {
  return (
    <>
      <Row>
        <Col>
          <h3>
            <FcDataRecovery /> Servicios y Sanidad
          </h3>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={6} className='mb-4'>
          <Image src='serv_sanidad.jpg' fluid></Image>
        </Col>
        <Col>
          <p>
            El DASE es un documento que acredita a los extranjeros que no posean
            residencia legal en España y les permite acceder a la sanidad
            pública de manera gratuita.Para optar a esta tarjeta hace falta
            cumplir una serie de requisitos los cuales también se detallaran a
            continuación.
          </p>
          <ListGroup className='mb-3'>
            <ListGroup.Item>
              <a href='https://sede.comunidad.madrid/prestacion-social/asistencia-sanitaria-extranjeros-dase'>
                Asistencia sanitaria extranjeros (DASE) | Comunidad de Madrid
              </a>
            </ListGroup.Item>
          </ListGroup>
          <p>
            Aquí podrás comprobar si reunes las condiciones para acceder a la
            tarjeta sanitaria ordinaria:
          </p>
          <ListGroup className='mb-3'>
            <ListGroup.Item>
              <a href='https://www.comunidad.madrid/servicios/salud/tarjeta-sanitaria'>
                Tarjeta Sanitaria | Comunidad de Madrid
              </a>
            </ListGroup.Item>
          </ListGroup>
          <p>
            La Comunidad de Madrid ofrece variedad de cursos y formaciones
            especialmente orientados hacia la integración de la población
            inmigrante como pueden ser talleres de orientación laboral o de
            trabajo con menores. Muchas de estas actividades se realizan de
            forma telemática aunque también pueden acudir a uno de los múltiples
            centros que tienen por Madrid.
          </p>
          <ListGroup className='mb-3'>
            <ListGroup.Item>
              <a href='https://www.comunidad.madrid/servicios/salud/tarjeta-sanitaria'>
                Centros de Participación e Integración de Inmigrantes |
                Comunidad de Madrid
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
