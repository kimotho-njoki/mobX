import React from 'react';
import { Table, Button } from 'semantic-ui-react'

const TableExamplePadded = () => (
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
      <Table.Row>
        <Table.Cell singleLine>Beatrice Njeri</Table.Cell>
        <Table.Cell>HR</Table.Cell>
        <Table.Cell>300$</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell singleLine>Lilian Adije</Table.Cell>
        <Table.Cell>Finance</Table.Cell>
        <Table.Cell>350$</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Button size='small'>Add</Button>
          <Button size='small'>Clear All</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExamplePadded
