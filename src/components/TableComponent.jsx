import React from 'react';
import {inject, observer} from 'mobx-react';
import { Table, Button, Modal, Form } from 'semantic-ui-react';


@inject('EmployeeStore')
@observer
class TableComponent extends React.Component {
  state = {
    name: '',
    department: '',
    salary: '',
    insurance: '',
    modalOpen: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  }

  handleButtonSubmit = (e) => {
    e.preventDefault();
    const { name, department, salary, insurance } = this.state;
    this.props.EmployeeStore.addEmployee({name, department, salary, insurance});
    this.handleModalClose();
  }

  handleClear = () => {
    this.props.EmployeeStore.clearEmployeeList();
  }

  render() {
    return (
      <Table celled padded className="employee-table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Insured</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {
          this.props.EmployeeStore.employeeList.map((employee) => {
            return (
              <Table.Row key={Math.random()}>
                <Table.Cell singleLine>{employee.name}</Table.Cell>
                <Table.Cell>{employee.department}</Table.Cell>
                <Table.Cell>{employee.salary}</Table.Cell>
                <Table.Cell>{employee.insurance}</Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Modal
                trigger={<Button size='small' onClick={this.handleModalOpen}>Add</Button>}
                open={this.state.modalOpen}
                onClose={this.handleModalClose}>
                <Modal.Header>Add an employee</Modal.Header>
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
                      <Button type='submit' onClick={this.handleButtonSubmit}>Submit</Button>
                    </Form>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Button size='small' onClick={this.handleClear}>Clear All</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default TableComponent;
