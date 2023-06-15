import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FcWorkflow } from 'react-icons/fc';
export default function Transportes() {
  return (
    <>
      <Row>
        <Col>
          <h3>
            <FcWorkflow /> Transportes
          </h3>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col md={6} className='mb-4'>
          <Image src='transp_page.jpg' fluid></Image>
        </Col>
        <Col md={6}>
          <p>
            A la hora de moverte por Madrid lo más asequible es el transporte
            público que incluye metro y autobuses. Lo más recomendable es
            adquirir el abono transporte (una tarjeta personal que permite hacer
            viajes ilimitados durante el mes que dura su recarga).Esta tarjeta
            permite usar todas las líneas de metro así como la red de buses
            urbana y la red de metro ligero(conocido como renfe).Este abono
            cuesta alrededor de 20 euros actualmente y existen descuentos para
            varios colectivos(jóvenes,personas mayores,familia numerosa,etc)
            aunque se prevé que aumente este precio en el siguiente año. Para
            tramitar esta tarjeta puede hacerlo de manera online mediante la
            página oficial de la Comunidad de Madrid (
            <a href='https://sede.comunidad.madrid/prestacion-social/asistencia-sanitaria-extranjeros-dase'>
              Billetes y abonos | Comunidad de Madrid
            </a>
            ) o de manera presencial en las máquinas de recarga de billetes que
            se encuentran ante los tornos de todas las estaciones de
            metro.También pueden hacerlo visitando las oficinas de gestión de la
            tarjeta de transporte público.
          </p>
        </Col>
      </Row>
    </>
  );
}
