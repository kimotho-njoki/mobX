import React from 'react';
import {inject, observer} from 'mobx-react';
import { Table, Button } from 'semantic-ui-react';

import ModalComponent from './ModalComponent';

@inject('EmployeeStore')
@observer
class TableComponent extends React.Component {
  state = {
    modalOpenAdd: false,
    modalOpenEdit: false
  }

  handleAddModal = () => {
      this.setState({
        modalOpenAdd: !this.state.modalOpenAdd
      });
  }

  handleEditModal = () => {
      this.setState({
        modalOpenEdit: !this.state.modalOpenEdit
      });
  }

  handleClear = () => {
    this.props.EmployeeStore.clearEmployeeList();
  }

  handleDelete = (index) => {
    this.props.EmployeeStore.deleteEmployee(index);
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
            <Table.HeaderCell colSpan="2"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {
          this.props.EmployeeStore.employeeList.map((employee) => {
            return (
              <Table.Row key={Math.random()}>
                <Table.Cell singleLine>{employee.name}</Table.Cell>
                <Table.Cell>{employee.department}</Table.Cell>
                <Table.Cell>{employee.salary}$</Table.Cell>
                <Table.Cell>{employee.insurance}</Table.Cell>
                <Table.Cell>
                <ModalComponent
                  trigger={<Button basic color='blue' onClick={this.handleEditModal}>Edit</Button>}
                  handleEditModal={this.handleEditModal}
                  modalEditOpen={this.state.modalOpenEdit}
                  index={this.props.EmployeeStore.employeeList.indexOf(employee)}
                  EmployeeStore={this.props.EmployeeStore}
                />
                </Table.Cell>
                <Table.Cell>
                  <Button
                    basic color='red'
                    onClick={() => this.handleDelete(this.props.EmployeeStore.employeeList.indexOf(employee))}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <ModalComponent
                trigger={<Button size='small' onClick={this.handleAddModal}>Add</Button>}
                handleAddModal={this.handleAddModal}
                modalAddOpen={this.state.modalOpenAdd}
                EmployeeStore={this.props.EmployeeStore}
              />
              <Button size='small' onClick={this.handleClear}>Clear All</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default TableComponent;
