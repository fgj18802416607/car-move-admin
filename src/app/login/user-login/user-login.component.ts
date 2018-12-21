import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.less']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  public ouser = 'f123';
  public passwd = 'bbbbbb';

  constructor(private router: Router) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  public Uerror = true;

  ngOnInit() {
  }

  logIn() {
    console.log(this.user.userId,this.user.pwd);
    if (this.ouser === this.user.userId && this.passwd === this.user.pwd)
    {
      const user = JSON.stringify(this.user);
      localStorage.setItem('user', user);
      this.router.navigate(['main']);
    }else{
      this.user.userId = '';
      this.user.pwd = '';
      this.Uerror = false;
      localStorage.clear();
    }
  }
}
