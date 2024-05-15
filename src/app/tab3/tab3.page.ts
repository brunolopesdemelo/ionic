import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  linksForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.linksForm = this.formBuilder.group({
      links: this.formBuilder.array([])
    });

  }


  disalbeAddLinks(){
    this.getLinksArray.controls.forEach(el => el.get("link")?.markAsTouched())
    if(this.linksForm.invalid){
      return true;
    }
    return false
  }

  addLink() {


    const piece = this.formBuilder.group({
      link: ['@', [Validators.required, Validators.minLength(4)]]
    });
    this.getLinksArray.push(piece);
    console.log('After Add: ', this.linksForm.value);
  }

  onSubmitForm() {
    console.log(this.linksForm.value);

    console.log(this.getLinksArray.length ==4);
    this.getLinksArray.controls.forEach(el => el.get("link")?.markAsTouched())
    if(this.linksForm.invalid){
      return
    }

  }

  deleteLink(i: number) {
    this.getLinksArray.removeAt(i);
  }

  get getLinksArray() {
    return (<FormArray>this.linksForm.get('links'));
  }

}
