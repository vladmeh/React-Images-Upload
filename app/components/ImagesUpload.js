import React from "react";
import {Image, ButtonGroup, Button, Glyphicon, Input} from "react-bootstrap/lib";
import {holderjs} from "holderjs";

export default class ImagesUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "holder.js/300x200",
      select: true,
      save: false,
      click: this.fileSelect.bind(this),
      btnStyle: "primary",
      btnText: React.DOM.span(null, 'Выберите файл')
    }
  }

  fileSelect(e){
    e.preventDefault();
    var fileElem = document.getElementById("fileElem");
    fileElem.click();
  }

  handleFiles(e){
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: reader.result,
        select: false,
        save: true,
        click: this.fileSave.bind(this),
        btnStyle: "success",
        btnText: React.DOM.span(null, 'Сохранить')
      })
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  fileSave(e){
    e.preventDefault();
    this.setState({
      btnStyle: "default",
      btnText: React.DOM.span({className: 'glyphicon glyphicon-ok'}, ' Файл сохранен...')
    });
    console.log('Файл сохранен...');
  }

  render() {
    return (
      <div>
        <Image src={this.state.image} thumbnail />
        <hr />
        <Button bsStyle={this.state.btnStyle} onClick={this.state.click}>{this.state.btnText}</Button>
        <Input type="file" className="hidden" id="fileElem" multiple accept="image/*"
          onChange={this.handleFiles.bind(this)}/>
      </div>
    );
  }
}
