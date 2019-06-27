import React, { Component } from "react";
import "../font.css";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Icon name="home" />
          <Text>Click Here</Text>
        </Button>
      </Container>
    );
  }
}
