import { ObraService } from 'src/app/services/obra.service';
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
    private router: Router,
    private obraService: ObraService
  ) { }

  obra!: Obra;
  isEdit: boolean = false;

  ngOnInit() {
    M.AutoInit();
    this.initObj();
  }
  onSubmit() {
    if (this.isEdit) {
      this.obraService.update(this.obra).then((o) => {
        alert('Obra: ' + o.identificador + ' atualizada!')
      })
      .catch((e) =>{
        alert('Salvar edição falhou!')
      })
    }
    else {
      this.obraService.save(this.obra).then((o) => {
        alert('Obra: ' + o.identificador + ' cadastrada com sucesso!!')
      })
      .catch((e) =>{
        alert('Salvar falhou!')
      })
    }
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
      this.obraService.getById(Number(editid))
        .then((o: Obra) => {
          this.obra = o;
        })
      this.isEdit = true;
    }
  }

}
