import { Row, Col, Image } from 'react-bootstrap';
import CardServicio from '../CardServicio';
export default function Home() {
  return (
    <>
      <Row className='justify-content-md-center p-3'>
        <Col>
          <Image
            className='mx-auto d-block img-fluid'
            src='/latinos-eeuu.webp'
          />
        </Col>
      </Row>{' '}
      <Row>
        <Col>
          <h3 className='text-center'>Nuevos Comienzos Madrid</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          {' '}
          <p className='text-justifty p-3'>
            Nuevos Comienzos Madrid se trata de una asociación creada por
            inmigrantes de segunda generación y que busca orientar a los nuevos
            residentes en este país.
          </p>
        </Col>
        <Col sm={12} md={6}>
          {' '}
          <p className='text-justify p-3'>
            Esta página web no tiene como objetivo el prestar ayudas en sí, sino
            que se trata de una guía, un lugar donde podrás encontrar toda la
            información relevante agrupada por sectores. En ella encontrarás
            tanto información imprescindible como enlaces a los distintos
            servicios que ofrece nuestra ciudad.
          </p>
        </Col>
      </Row>
      <Row className='justify-content-md-between align-items-stretch'>
        <Col className='mb-2 d-flex justify-content-center'>
          <CardServicio
            title='Servicios y Sanidad'
            texto='Acceso a la sanidad pública.'
            imagen='sanidad.jpg'
            buttonText='Servicios y Sanidad'
            ruta='/servicios'
          />
        </Col>
        <Col className='mb-2 d-flex justify-content-center'>
          <CardServicio
            title='Ayudas y Programas Sociales'
            texto='Ayudas económicas, formativas, laborales, sanitarias, etc...'
            imagen='sociales.jpg'
            buttonText='Ayudas y Programas Sociales'
            ruta='/programas'
          />
        </Col>
        <Col className='mb-2 d-flex justify-content-center'>
          <CardServicio
            title='Transporte'
            texto='Información sobre el transporte público.'
            imagen='transporte.jpg'
            buttonText='Transporte'
            ruta='/transportes'
          />
        </Col>
        <Col className='mb-2 d-flex justify-content-center'>
          <CardServicio
            title='Ocio y Actividades'
            texto='Historia, cultura y actividades en la ciudad de Madrid.'
            imagen='ocio.jpg'
            buttonText='Ocio y Actividades'
            ruta='/actividades'
          />
        </Col>
      </Row>
    </>
  );
}
