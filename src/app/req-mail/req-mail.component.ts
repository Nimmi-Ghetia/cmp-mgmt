import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-mail',
  templateUrl: './req-mail.component.html',
  styleUrls: ['./req-mail.component.css']
})
export class ReqMailComponent implements OnInit {

  templateData = '';
  constructor() { }


  ngOnInit() {
  }
  getTemplate(data: string) {
    this.templateData = data;

  }

}
