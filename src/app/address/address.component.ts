import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Address } from '../model/Address';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

 @Input()
 address : Address= new Address('','','','','') ;
 @Output() addressChange = new EventEmitter<Address>();

 changeAddress(newAddress : Address){
  this.addressChange.emit(newAddress);
 }




}
