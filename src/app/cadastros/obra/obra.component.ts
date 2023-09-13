import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from './../../model/obra';
import { Component, OnInit } from '@angular/core';
import { ObraService } from 'src/app/services/obra.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private obraService: ObraService
  ) { }
  delete(id: string) {
    if (confirm("Deseja excluir?")) {
      this.obraService.delete(Number(id)).then((resp : Boolean) =>{
        this.loadData();
      }).catch((e) =>{
        alert('Delete falhou!')
      })
    }
  }
  edit(itemid: string) {
    this.router.navigate(['form-obra', { id: itemid }]);
  }
  table = Array<Obra>();
  obra: Obra = new Obra();
  ngOnInit(): void {
    this.loadData();
    M.AutoInit();
  }
  loadData() {
    this.table = Array<Obra>();
    this.obraService.getAll().then((o: Obra[]) => {
      o.forEach(element => {
        this.obra = element
        this.table.push(this.obra)
      });
    })
  }

}
