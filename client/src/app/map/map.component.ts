import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // we must hard code the starting coordinates
  // the starting point atm is London
  latitude = 51.508742;
  longitude = -0.120850;

  selectedMarker;

  // stores the coordinates and the car info
  // associated with each point
  markers = [
    { lat: 51.508742,
      lng: -0.420000,
      item: {
        carName: "Toyota Corolla",
        style: "hatchback",
        costph: 24
      }
    },
    { lat: -0.120850,
      lng: 51.508742,
      item: {
        carName: "Honda Civic",
        style: "sedan",
        costph: 15
      }
    }
  ];

  // adds a marker at the coordinates
  //addMarker(lat: number, lng: number, mess: string){
  //  this.markers.push({lat,lng,mess});
  //}

  // since the coordinates are assumed to be unique
  // they can be used to find the associated car
  findItem(lat, lng){
    var item;
    var i;
    console.log(lat + " " + lng);
    for (i = 0; i < this.markers.length; i++){
      if (lat === this.markers[i].lat && lng === this.markers[i].lng){
        console.log(this.markers[i].item);
        item = this.markers[i].item;
      }
    }
    return item;
  }

  selectMarker(event){
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
      info: this.findItem(event.latitude, event.longitude)
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
