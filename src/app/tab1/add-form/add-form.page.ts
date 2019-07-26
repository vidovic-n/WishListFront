import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/shared/item.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {

  addForm: FormGroup;

  constructor(private serviceItem: ItemService, private router: Router) {
  }

    ngOnInit() {
      this.addForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        imageUrl: new FormControl(null, Validators.required),
        price: new FormControl(null, [Validators.required, Validators.pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)]),
        category: new FormControl(null, Validators.required)
   });
    }


    // ionViewWillEnter() {
      // this.serviceItem.refreshList();
      // this.ngOnInit();
    // }


    onSubmit(form: FormGroup) {
      console.log(this.addForm);
      this.serviceItem.postItem(form.value).subscribe(
        res => {
          this.serviceItem.refreshList();
          this.router.navigate(['/tabs/tab1']);
        },
        err => {
          console.log(err);
        }
      );
    }

}
