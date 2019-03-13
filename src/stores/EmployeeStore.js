import { action, computed, observable } from 'mobx';

class EmployeeStore {
  @observable employeeList = [];
  @observable name = '';
  @observable department = '';
  @observable salary = '';
  @observable insurance = '';
  @observable modalOpenAdd = false;
  @observable modalOpenEdit = false;


  @action handleAddModal = () => {
    this.modalOpenAdd = !this.modalOpenAdd;
  }

  @action handleEditModal = () => {
    this.modalOpenEdit = !this.modalOpenEdit;
  }

  @action setCurrentEmployee = (employee) => {
    this.name = employee.name;
    this.department = employee.department;
    this.salary = employee.salary;
    this.insurance = employee.insurance;
  }

  @action onChange = (e) => {
    switch(e.target.name) {
      case 'name':
        this.name = e.target.value;
        break;
      case 'department':
        this.department = e.target.value;
        break;
      case 'salary':
        this.salary = e.target.value;
        break;
      case 'insurance':
        this.insurance = e.target.value;
        break;
      default:
        break;
    }
  }

  @action defaultUserState = () => {
    this.name = '';
    this.department = '';
    this.salary = '';
    this.insurance = '';
  }

  @action addEmployee = () => {
    this.employeeList.push({
      name: this.name,
      department: this.department,
      salary: this.salary,
      insurance: this.insurance
    });
    this.defaultUserState();
  }

  @action editEmployee = (index) => {
    this.employeeList.splice(index, 1, {
      name: this.name,
      department: this.department,
      salary: this.salary,
      insurance: this.insurance
    });
    this.defaultUserState();
  }

  @action deleteEmployee = (index) => {
    this.employeeList.splice(index, 1);
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
