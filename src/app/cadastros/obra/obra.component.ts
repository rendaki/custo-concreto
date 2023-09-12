import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from './../../model/obra';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  delete(id: string) {
    if (confirm("Deseja excluir?")) {

      let tmp_table = Array<Obra>();
      for (let i = 0; i < this.table.length; i++) {
        if (id != this.table[i].id) {
          tmp_table.push(this.table[i])
        }
      }
      this.table = tmp_table
      localStorage.setItem('cadastro-obras', JSON.stringify(this.table));
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
    var obj = JSON.parse(String(localStorage.getItem('cadastro-obras')));
    if (obj) {
      for (let i = 0; i < obj.length; i++) {
        this.obra = obj[i];
        this.table.push(this.obra)
      }
    }
  }

}
