import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {
  
  termino: string = "hola mundo";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe(resp => {
      console.log('resp',resp);
      this.paises = resp;

      if (resp['status']){
        this.hayError = true;
        this.paises = [];
        console.log(" ERROR ",resp['status']);
      }

    },


    //  (err) => {
    //    console.log(" ERROR ");
    //    console.info(err);
    //    this.hayError = false;
    //   }
      )
  }


}
