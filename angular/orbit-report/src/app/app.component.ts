import { Component, Input } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    
   window.fetch(satellitesUrl).then(function(response) {
    response.json().then(function(data) {

       let fetchedSatellites = data.satellites;
       for (let i = 0; i < fetchedSatellites.length; i++) {
         let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].orbitType, fetchedSatellites[i].launchDate, fetchedSatellites[i].type, fetchedSatellites[i].operational);
        this.sourceList.push(satellite);
        }
    }.bind(this));
 }.bind(this));
}
  }