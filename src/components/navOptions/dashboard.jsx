    {/* Conteúdo principal */}
    <Col md={10} className="p-4">
    <h2 className="mb-4">Dashboard</h2>

    {/* Cards principais */}
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-white bg-success">
          <Card.Body>
            <Card.Title>Upgrade your Dashcode</Card.Title>
            <Button variant="light" size="sm">Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Total Revenue</Card.Title>
            <h3>3,564</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Products Sold</Card.Title>
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

    {/* Relatórios */}
    <Row>
      <Col md={8}>
        <Card>
          <Card.Header>Revenue Report</Card.Header>
          <Card.Body>
            <div style={{ height: '300px', backgroundColor: '#f8f9fa' }}>
              <p className="text-center text-muted pt-5">[Gráfico de barras aqui]</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Header>Overview</Card.Header>
          <Card.Body>
            <div style={{ height: '300px', backgroundColor: '#f8f9fa' }}>
              <p className="text-center text-muted pt-5">[Gráfico circular aqui]</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Atividade recente */}
    <Row className="mt-4">
      <Col>
        <Card>
          <Card.Header>Recent Activity</Card.Header>
          <Card.Body>
            <p><strong>Finance KPI</strong> - Mobile app launch preparation... <span className="text-muted">1 hour ago</span></p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Col>