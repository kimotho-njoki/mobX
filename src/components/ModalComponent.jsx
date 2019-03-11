import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

class ModalComponent extends React.Component {
  state = {
    name: '',
    department: '',
    salary: '',
    insurance: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { name, department, salary, insurance } = this.state;
    this.props.EmployeeStore.addEmployee({name, department, salary, insurance});
    this.props.handleAddModal()
  }

  handleUpdate = (index) => {
    const { name, department, salary, insurance } = this.state;
    this.props.EmployeeStore.editEmployee(index, {name, department, salary, insurance});
    this.props.handleEditModal()
  }

  render() {
    return (
      <Modal
        trigger={this.props.trigger}
        open={ this.props.modalEditOpen || this.props.modalAddOpen}
        onClose={this.props.handleEditModal || this.props.handleAddModal}>
        <Modal.Header>Employee Details</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder='Enter name...' type="text" name="name" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
              <label>Department</label>
              <input placeholder='Enter department...' type="text" name="department" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
              <label>Salary</label>
              <input placeholder='Enter salary...' type="number" name="salary" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
              <label>Insurance Status</label>
              <input placeholder='Enter insurance status...' type="text" name="insurance" onChange={this.handleChange} />
              </Form.Field>
              <Button
                type='submit'
                onClick={this.props.modalEditOpen ? () => this.handleUpdate(this.props.index) : this.handleAdd}>
                Submit
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalComponent;
