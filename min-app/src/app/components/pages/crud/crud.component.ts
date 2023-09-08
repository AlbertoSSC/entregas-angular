import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  rickAndMortyList: any[] = [];

  constructor() {}

  async ngOnInit() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      this.rickAndMortyList = data.results;
    } catch (error) {
      console.log('Error con el fetching: ' + error);
    }
  }
}
