import { Component, OnChanges, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  name = 'Angular ' + VERSION.major;
  typedName;
  public visibleName = '';
  // textBox= new FormControl('');
  profileForm = new FormGroup({
    textBox: new FormControl(''),
  });
  public names = [
    {
      firstName: 'Dhruthi',
      lastName: 'Yeleshetty',
    },
    {
      firstName: 'Damini',
      lastName: 'Lakshya',
    },
    {
      firstName: 'Krishna',
      lastName: 'Kolichala',
    },
  ];
  filteredNameList = [];

  enteredInput() {
    // if(this.profileForm.get('textBox').value.includes){
    //   // this.profileForm.get('textBox').setValue('Dhruthi');
    // };
    let enteredVal = this.profileForm.get('textBox').value;
    this.names.filter((nm) => {
      if (nm.firstName.includes('D')) {
        console.log(nm);
        this.filteredNameList.push(nm);
        // console.log(this.filteredNameList);
      }
      // console.log(this.filteredNameList);
    });
  }

  updateName() {
    // this.textBox.setValue("Dhruthi");
    // this.profileForm.get('textBox').setValue('Dhruthi');
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
