import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {

  pais: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit() {
    // this.activatedRoute.params
    // .subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais)
    //   })
    // });
  
  this.activatedRoute.params
  .pipe(
    switchMap((params) => this.paisService.getPaisPorAlpha( params.id )),
    tap(console.log)
  )
  .subscribe(resp =>{
    this.pais = resp
  })
  
  }

}
