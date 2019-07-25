import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from 'src/app/shared/item.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {

  addForm: FormGroup;

  constructor(private serviceItem: ItemService) { }

    ngOnInit() {
      this.addForm = new FormGroup({
        title: new FormControl(null),
        description: new FormControl(null),
        imageUrl: new FormControl(null),
        price: new FormControl(null),
        category: new FormControl(null)
   });
    }

    onSubmit(form: FormGroup) {
      console.log(this.addForm);
      this.serviceItem.postItem(form.value).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

    }

}
