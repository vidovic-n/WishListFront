import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  formData: Item;
  readonly rootURL = 'http://localhost:55353/api';
  itemList: Item[];

  constructor(private httpClient: HttpClient) { }

  postItem(formData: Item) {
   return this.httpClient.post(this.rootURL + '/Item', formData );
  }

  refreshList() {
    this.httpClient.get(this.rootURL + '/Item')
    .toPromise()
    .then(res => this.itemList = res as Item[]);
  }

  deleteItem(id) {
    return this.httpClient.delete(this.rootURL + '/Item/' + id);

  }
}
