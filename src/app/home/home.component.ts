import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // data = new FormGroup({
  //   amount: new FormControl()
  // });

  public amount: number | string = '';
  numpad: number | undefined;
    
  // numpadSettings: MbscNumpadDecimalOptions = {
  //     theme: 'ios',
  //     themeVariant: 'light',
  //     min: 1,
  //     scale: 2
  // };

  constructor() { }


  ngOnInit(): void {
    
  }

}
