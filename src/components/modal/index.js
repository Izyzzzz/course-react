import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {onDelete} = this.props;
    return (
      <div>
        <button 
            type="button" 
            className="btn btn-trash btn-sm"
            onClick={this.toggle}>
            <i className="fa fa-trash-o"></i>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Удаление</ModalHeader>
          <ModalBody>
            Вы точно собираетесь удалить запись?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onDelete}>Да</Button>
            <Button color="secondary" onClick={this.toggle}>Нет</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}