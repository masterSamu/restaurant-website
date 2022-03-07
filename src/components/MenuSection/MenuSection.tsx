import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "./MenuItem";
import "./MenuSection.css";

export default function MenuSection() {
  return (
    <Container className="menu-container" id="MENU">
      <Row className="menu-headline-container" >
        <h2 className="menu-main-headline" >MENU</h2>
      </Row>
      <Row className="menu-items">
          <Row>
            <h3 className="menu-headline">Pääruoka</h3>
          </Row>
          <MenuItem
            name="Pad Thai"
            price={10}
            materials="Riisinuudelit, Kana, Porkkana, Valkokaali, TOfu, Purjosipuli,
          Kananmuna, Punasipuli, Pad Thai kastike, Tamarin kastike"
          />
          <MenuItem
            name="Pad Thai"
            price={10}
            materials="Riisinuudelit, Kana, Porkkana, Valkokaali, TOfu, Purjosipuli,
          Kananmuna, Punasipuli, Pad Thai kastike, Tamarin kastike"
          />
          <MenuItem
            name="Pad Thai"
            price={10}
            materials="Riisinuudelit, Kana, Porkkana, Valkokaali, TOfu, Purjosipuli,
          Kananmuna, Punasipuli, Pad Thai kastike, Tamarin kastike"
          />

          <Row>
            <h3 className="menu-headline">Makeat</h3>
          </Row>
          <MenuItem
            name="Muurinpohjalettu"
            price={5}
            materials="Lettu, mansikkahillo, kermavaahto"
          />

          <Row>
            <h3 className="menu-headline">Juomat</h3>
          </Row>

          <MenuItem
           name="Virvoitusjuoma 33cl"
           price={2.50}
           materials="Coca-cola, Jaffa, Sprite"
          />
          <MenuItem
           name="Pillimehu"
           price={1}
           materials="Appelsiini, Päärynä, Cola"
          />
      </Row>
    </Container>
  );
}
