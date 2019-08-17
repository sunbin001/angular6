import { Component, OnInit ,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {

  constructor() { }

  @Input()
  public userName:String;

  @Input()
  public imageUrl:String;

  @Output()
  public alertButtonClick = new EventEmitter(); // EventEmitter只是一个帮你实现观察者模式①的对象


  ngOnInit() {
    console.log('list-panel ng on init')
  }

  public alertUserName(data) {
    this.alertButtonClick.emit(data);
  }
}
