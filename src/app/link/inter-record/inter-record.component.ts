import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-record',
  templateUrl: './inter-record.component.html',
  styleUrls: ['./inter-record.component.less']
})
export class InterRecordComponent implements OnInit {
  nameList = [
    { text: 'Tom', value: 'Tom' },
    { text: 'Jone', value: 'Jone' },
    { text: 'Kitty', value: 'Kitty' },
  ];
  addressList = [
    { text: 'Tieling', value: 'Tieling' },
    { text: 'Shenyang', value: 'Shenyang' },
    { text: 'Dalian', value: 'Dalian' }

  ];
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: '100',
      operation: '导出',
    },
  ];
  displayData = [...this.data];

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
      // tslint:disable-next-line:max-line-length
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      // tslint:disable-next-line:max-line-length
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
