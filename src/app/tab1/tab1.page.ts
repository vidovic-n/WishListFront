import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ItemService } from '../shared/item.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterContentInit {

 constructor(public itemService: ItemService) {
 }

 ngOnInit() {
   this.itemService.refreshList();
 }


  ngAfterContentInit() {
    this.itemService.refreshList();
 }

 ionViewWillEnter() {
  this.itemService.refreshList();
  console.log('ionViewwillwnterTab1');
 }

  onDelete(id) {
    if (confirm('Are you sure you want do delete this item ?')) {
      this.itemService.deleteItem(id)
        .subscribe(
          res => {
          this.itemService.refreshList();
        },
          err => {
            console.log(err);
          });
    }
  }
}
