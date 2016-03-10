import React from "react";
import {Grid, Row, Col, Jumbotron} from "react-bootstrap/lib";
import ImagesUpload from "./ImagesUpload";


var transparentBg = require('../styles').transparentBg;

export default class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={8} smOffset={2}>
            <Jumbotron className="text-center" style={transparentBg}>
              <h1>Image Upload</h1>
              <p>ReactJS component for upload images file.</p>
              <p>A FileReader interface, which provides methods to read a File or a Blob, and an event model to obtain the results of these reads.</p>
              <hr />
              <ImagesUpload />
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}
