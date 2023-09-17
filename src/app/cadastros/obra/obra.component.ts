import { ToastService } from './../../services/toast.service';
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
    private obraService: ObraService,
    private toastService: ToastService
  ) { }
  delete(id: number) {
    if (confirm("Deseja excluir?")) {
      this.obraService.delete(id).then((resp: Boolean) => {
        this.loadData();
        this.toastService.show("Obra deletada!",1);
      }).catch((e) => {
        this.toastService.show("Erro ao deletar Obra!",2);
      })

    }
  }
  edit(itemid: number) {
    this.router.navigate(['form-obra', { id: itemid }]);
  }
  table = Array<Obra>();
  userId!: number;


  ngOnInit(): void {
    this.loadData();
    M.AutoInit();
  }
  loadData() {
    this.table = Array<Obra>();
    this.userId = Number(localStorage.getItem('user_id'));
    this.obraService.getAll(this.userId).then((o: Obra[]) => {
      o.forEach(element => {
        this.table.push(element)
      });
    })
  }
  getCategoria(c: string)
  {
    var resp = "";
    switch(c)
    {
      case "r":
      {
        resp = "Residencial";
        break;
      }
      case "c":
      {
        resp = "Comercial";
        break;
      }
      default: resp ="";
    }
    return resp;
  }

}
