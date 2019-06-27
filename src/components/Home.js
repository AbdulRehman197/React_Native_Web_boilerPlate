import React, { Component } from "react";
import "../font.css";
import { Container, Button, Icon, Text } from "native-base";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Text>Native Base Button</Text>
        <Button>
          <Icon name="home" />
          <Text>Click Here</Text>
        </Button>
      </Container>
    );
  }
}
