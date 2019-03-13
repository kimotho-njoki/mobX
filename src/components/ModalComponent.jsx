import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button, Form, Modal } from 'semantic-ui-react';

@inject ('EmployeeStore')
@observer
class ModalComponent extends React.Component {
  handleAdd = (e) => {
    e.preventDefault();
    this.props.EmployeeStore.addEmployee();
    this.props.EmployeeStore.handleAddModal();
  }

  handleUpdate = (index) => {
    this.props.EmployeeStore.editEmployee(index);
    this.props.EmployeeStore.handleEditModal();
  }

  render() {
    const { index, trigger,  EmployeeStore } = this.props;
    return (
      <Modal
        trigger={trigger}
        open={EmployeeStore.modalOpenEdit || EmployeeStore.modalOpenAdd}
        onClose={EmployeeStore.handleEditModal || EmployeeStore.handleAddModal}>
        <Modal.Header>Employee Details</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder='Enter name...'
                  type="text"
                  value={EmployeeStore.name}
                  name="name"
                  onChange={EmployeeStore.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Department</label>
                <input
                  placeholder='Enter department...'
                  type="text"
                  value={EmployeeStore.department}
                  name="department"
                  onChange={EmployeeStore.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Salary</label>
                <input
                  placeholder='Enter salary...'
                  type="number"
                  value={EmployeeStore.salary}
                  name="salary"
                  onChange={EmployeeStore.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Insurance Status</label>
                <input
                  placeholder='Enter insurance status...'
                  type="text"
                  value={EmployeeStore.insurance}
                  name="insurance"
                  onChange={EmployeeStore.onChange}
                />
              </Form.Field>
              <Button
                type='submit'
                onClick={EmployeeStore.modalOpenEdit ? () => this.handleUpdate(index) : this.handleAdd}>
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
