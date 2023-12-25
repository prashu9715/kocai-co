import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  filterData,
  resetUserFilter,
} from 'src/app/modules/user-management/services/user-management-util';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
})
export class UserFilterComponent implements OnInit {
  display = false;
  @Output() onFilterChanges = new EventEmitter();
  filterData = filterData;
  selectedMenu: string[] = [];

  ngOnInit(): void {
    resetUserFilter();
  }

  onFilterChange(event: any, ref: any, isBool: boolean) {
    ref.isChecked = isBool
      ? event
      : (event.target.checked as unknown as boolean);
    this.onFilterChanges.emit(this.filterData);
    this.setSelectedMenu();
  }
  toggle() {
    this.display = !this.display;
  }

  setSelectedMenu() {
    if (this.filterData.role.some((data) => data.isChecked)) {
      if (!this.selectedMenu.includes('Role')) this.selectedMenu.push('Role');
    } else {
      this.selectedMenu = this.selectedMenu.filter((data) => data !== 'Role');
    }

    if (this.filterData.dataSource.some((data) => data.isChecked)) {
      if (!this.selectedMenu.includes('DataSource'))
        this.selectedMenu.push('DataSource');
    } else {
      this.selectedMenu = this.selectedMenu.filter(
        (data) => data !== 'DataSource'
      );
    }

    if (
      this.filterData.privileges.bulkUpload.some((data) => data.isChecked) ||
      this.filterData.privileges.simplifiedQC.some((data) => data.isChecked) ||
      this.filterData.privileges.userManagement.some((data) => data.isChecked)
    ) {
      if (!this.selectedMenu.includes('Privileges'))
        this.selectedMenu.push('Privileges');
    } else {
      this.selectedMenu = this.selectedMenu.filter(
        (data) => data !== 'Privileges'
      );
    }
  }
}
