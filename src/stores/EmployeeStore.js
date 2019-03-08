import {observable, action, computed} from 'mobx';

class EmployeeStore {
  @observable employeeList = [];

  @action addEmployee = (employee) => {
    this.employeeList.push(employee);
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
