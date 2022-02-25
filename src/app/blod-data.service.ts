import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlodDataService {

  constructor() { }

  getData(){
    return [
      [
        {title:"Title 1  from TS",summary:"summary 1 from TS"},
        {title:"Title 2  from TS",summary:"summary 2 from TS"},
        {title:"Title 3  from TS",summary:"summary 3 from TS"},
        {title:"Title 4  from TS",summary:"summary 4 from TS"},

      ],

      [
        {title:"Title 5  from TS",summary:"summary 5 from TS"},
        {title:"Title 6  from TS",summary:"summary 6 from TS"},
        {title:"Title 7  from TS",summary:"summary 7 from TS"},
        {title:"Title 8  from TS",summary:"summary 8 from TS"},

      ],
      [
        {title:"Title 9  from TS",summary:"summary 9 from TS"},
        {title:"Title 10  from TS",summary:"summary 10 from TS"},
        {title:"Title 11  from TS",summary:"summary 11 from TS"},
        {title:"Title 12  from TS",summary:"summary 12 from TS"},

      ]
    ];
  }
}
