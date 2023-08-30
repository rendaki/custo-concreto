import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from 'src/app/model/obra';

@Component({
  selector: 'app-form-obra',
  templateUrl: './form-obra.component.html',
  styleUrls: ['./form-obra.component.css']
})

export class FormObraComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  obra!: Obra;
  isEdit: boolean = false;
  table = Array<Obra>();

  ngOnInit() {
    M.AutoInit();
    this.loadData();
    this.initObj();
  }
  onSubmit() {
    if (this.isEdit) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i].id == this.obra.id) {
          this.table[i] = this.obra;
          this.isEdit = false;
          break;
        }
      }
    }
    else {
      let id = Number(localStorage.getItem('cadastro-obras-sec'));
      this.obra.id = String(id);
      id = id + 1;
      localStorage.setItem('cadastro-obras-sec', String(id));
      this.table.push(this.obra)
    }

    localStorage.setItem('cadastro-obras', JSON.stringify(this.table));

    this.router.navigate(['/cadastro-obra']);
  }

  initObj() {

    this.obra = new Obra();
    this.obra.identificador = '';
    this.obra.endereco = '';
    this.obra.area = 0;
    this.obra.categoria = 'Selecione';
    this.obra.metodo = 'Selecione'
    this.obra.tipo_teto_laje = false;
    this.obra.tipo_teto_forro_pvc = false;
    this.obra.tipo_teto_forro_gesso = false;
    this.obra.tipo_teto_forro_drywall = false;
    this.obra.tipo_teto_forro_madeira = false;
    if (this.route.snapshot.paramMap.has('id')) {
      var editid = this.route.snapshot.paramMap.get('id');
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i].id == editid) {
          this.obra = this.table[i];
          this.isEdit = true;
          break;
        }
      }
    }
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
