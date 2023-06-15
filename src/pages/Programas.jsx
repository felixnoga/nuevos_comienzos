import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FcCollaboration } from 'react-icons/fc';

export default function Programas() {
  return (
    <>
      <Row>
        <Col>
          <h3>
            <FcCollaboration /> Ayudas y Programas Sociales
          </h3>
        </Col>
      </Row>
      <Row className='mt-4 mb-4'>
        <Col md={6} className='mb-4'>
          <Image src='programas.jpg' fluid></Image>
        </Col>
        <Col md={6}>
          <p>
            En España existen varias ayudas (económicas,formativas y
            laborales,sanitarias,etc) a la que se pueden optar aún siendo
            irregular vuestra condición en el país.También podéis informaros
            sobre los trámites para solicitar asilo político o la condición de
            refugiados en el siguiente enlace:
            <ListGroup className='mt-3'>
              <ListGroup.Item variant='dark'>Enlaces:</ListGroup.Item>
              <ListGroup.Item>
                <a href='https://iberoeconomia.es/inmigracion/las-ayudas-que-pueden-solicitar-los-inmigrantes-sin-papeles-en-espana/'>
                  Las ayudas que pueden solicitar los inmigrantes sin papeles en
                  España (iberoeconomia.es)
                </a>
              </ListGroup.Item>
            </ListGroup>
          </p>
          <p>
            Existen varias asociaciones o ONGs las cuales prestan servicios y
            atención en diferentes ámbitos,así como ayudan a optar a las ayudas
            y a completar los trámites mencionados en el punto anterior: <br />
            <ListGroup className='mt-3'>
              <ListGroup.Item variant='dark'>Enlaces:</ListGroup.Item>
              <ListGroup.Item>
                <a href='https://www.cruzroja.es/principal/web/comunidad-de-madrid/centro-atencion'>
                  Comunidad de Madrid - Centro de atención a inmigrantes y
                  refugiados - Cruz Roja
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href='https://www.fundacionadsis.org/es/madrid/portada'>
                  Madrid | Fundación Adsis (fundacionadsis.org)
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href='https://redacoge.org/'>
                  Red Acoge Federación de ONGs en defensa de la población
                  inmigrante y asilada - Red Acoge
                </a>
              </ListGroup.Item>
            </ListGroup>
          </p>
          <p>
            En el primer enlace encontraremos todas las gestiones que pueden
            necesitar (reagrupación familiar,parejas de hecho,etc.) explicadas
            una por una así como información relevante sobre estas (tasas de
            extranjería, todos los formularios a rellenar según tu necesidad,
            etc.) En el segundo se encuentra una serie de apartados de interés
            común e información y orientación acerca de estos,con la intención
            de facilitar la integración.
          </p>
          <ListGroup className='mt-3'>
            <ListGroup.Item variant='dark'>Enlaces:</ListGroup.Item>
            <ListGroup.Item>
              <a href='https://www.parainmigrantes.info/todos-los-tramites-de-extranjeria/'>
                TODOS LOS TRÁMITES DE EXTRANJERÍA | Parainmigrantes
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href='https://www.comunidad.madrid/servicios/asuntos-sociales/informaciones-practicas-inmigrantes/'>
                Informaciones prácticas para inmigrantes | Comunidad de Madrid
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
