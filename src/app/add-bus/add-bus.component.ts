import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus.model';
import { BusService } from '../services/bus.service';
@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
newBus = new Bus();

  constructor(private busService: BusService) { }
  addBus(){
    console.log(this.newBus);
    
    this.busService.ajouterBus(this.newBus);
  }

  ngOnInit(): void {
  }

}
