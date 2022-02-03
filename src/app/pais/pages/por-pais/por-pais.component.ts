import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;

    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = "hola mundo";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
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

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = [])

  }

  buscarSugerido(termino: string){
    this.buscar(termino);
    
  }

}
