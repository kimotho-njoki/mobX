import { observable, action, computed } from 'mobx';

class EmployeeStore {
  @observable employeeList = [];

  @action addEmployee = (employee) => {
    this.employeeList.push(employee);
  }

  @action deleteEmployee = (index) => {
    this.employeeList.splice(index, 1);
  }

  @action editEmployee = (index, employee) => {
    this.employeeList.splice(index, 1, employee);
  }

  @action clearEmployeeList = () => {
    this.employeeList = [];
  }

  @computed get allEmployees() {
    return this.employeeList.length;
  }
}

const store = new EmployeeStore();
export default store;
