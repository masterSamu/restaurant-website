import { Container, Row } from "react-bootstrap";

interface Props {
  name: string;
  price: number;
  materials: string;
}

export default function MenuItem({name, price, materials}:Props) {
  return (
    <Container fluid className="menu-item-container">
      <Row className="menu-item-header-container">
        <span className="item-name" data-testid="menu-item-name">{name}</span>
        <span className="item-price" data-testid="menu-item-price">{price} €</span>
      </Row>
      <Row className="raw-materials-container">
        <span className="raw-materials" data-testid="menu-item-materials">
          {materials}
        </span>
      </Row>
    </Container>
  );
}
