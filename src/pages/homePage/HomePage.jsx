import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Navbar, Nav, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import userLogSetLogin from '../../components/functions/userLogSetLogin.jsx';
import TopLoadingBar from '../../components/loadingBar/topLoadingBar.jsx';

function Dashboard() {

 
    userLogSetLogin()

      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 800); // simula carregamento
        return () => clearTimeout(timeout);
      }, []);
  
  return (
    
    <Container fluid className="p-0">
      <TopLoadingBar loading={loading} />

      {/* Navbar Superior */}
      <Navbar bg="white" expand="lg" className="shadow-sm px-4 py-3">
        <Navbar.Brand href="#">DashCode</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#">App</Nav.Link>
          <Nav.Link href="#">Pages</Nav.Link>
          <Nav.Link href="#">Widgets</Nav.Link>
          <Nav.Link href="#">Extra</Nav.Link>
        </Nav>
        <Form className="d-flex align-items-center">
          <Button variant="outline-secondary" size="sm" className="me-2">Weekly</Button>
          <Button variant="outline-secondary" size="sm" className="me-3">Select Date</Button>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="rounded-circle"
            style={{ width: '40px' }}
          />
        </Form>
      </Navbar>

      {/* Conteúdo Principal */}
      <Container fluid className="mt-4 px-4">
        <h4 className="mb-4">Dashboard</h4>

        {/* Linha dos Cards */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="" style={{}}>
              <Card.Body>
                <Card.Title>Upgrade your Dashcode</Card.Title>
                <Button variant="light">Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Total revenue</Card.Title>
                <h3>3,564</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Products sold</Card.Title>
                <h3>564</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Growth</Card.Title>
                <h3 className="text-success">+5.0%</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Linha dos Gráficos */}
        <Row className="mb-4">
          <Col md={8}>
            <Card>
              <Card.Header>Revenue Report</Card.Header>
              <Card.Body style={{ height: 300 }}>
                <p className="text-muted text-center pt-5">[Gráfico de barras aqui]</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>Overview</Card.Header>
              <Card.Body style={{ height: 300 }}>
                <p className="text-muted text-center pt-5">[Gráfico circular aqui]</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Linha da Tabela e Atividades */}
        <Row>
          <Col md={8}>
            <Card>
              <Card.Header>All Company</Card.Header>
              <Card.Body>
                <p className="text-muted text-center">[Tabela com dados de empresa aqui]</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Header>Recent Activity</Card.Header>
              <Card.Body>
                <p><strong>Finance KPI</strong> Mobile app launch preparation... <span className="text-muted">1 hour ago</span></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Dashboard;
