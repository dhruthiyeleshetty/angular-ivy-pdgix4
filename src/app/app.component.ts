import { Component, OnChanges, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb : FormBuilder){}
  name = 'Angular ' + VERSION.major;
  typedName;
  public visibleName = '';
  // textBox= new FormControl('');
  profileForm = new FormGroup({
    textBox: new FormControl('')
  })
  public names = [
    {
      firstName: 'Dhruthi',
      lastName: 'Yeleshetty',
    },
    {
      firstName: 'Krishna',
      lastName: 'Kolichala',
    },
  ];
  updateName(){
    // this.textBox.setValue("Dhruthi");
  }
  // onKeyInput(event) {
  //   // console.log(event.target.value as HTMLInputElement);
  //   this.names.filter(nm=>{
  //     if(event.target.value.includes(nm)){
  //       console.log(nm + "inside for");
  //       // console.log(this.visibleName);
  //     }
  //   })
  // }
}
