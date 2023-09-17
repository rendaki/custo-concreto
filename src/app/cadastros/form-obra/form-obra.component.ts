import { ToastService } from './../../services/toast.service';
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
    private obraService: ObraService,
    private toastService: ToastService
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
        this.toastService.show("Edição Obra Salva com Sucesso",1);
      })
      .catch((e) =>{
        this.toastService.show("Erro ao Editar Obra",2);
      })
    }
    else {
      this.obraService.save(this.obra).then((o) => {
        this.toastService.show("Obra Salva com Sucesso",1);
      })
      .catch((e) =>{
        this.toastService.show("Erro ao Salvar Obra",2);
      })
    }
    this.router.navigate(['/cadastro-obra']);

  }

  initObj() {

    this.obra = new Obra();
    this.obra.identificador = '';
    this.obra.endereco = '';
    this.obra.area = 0;
    this.obra.categoria = ' ';
    this.obra.metodo = ' '
    this.obra.tipo_teto_laje = false;
    this.obra.tipo_teto_forro_pvc = false;
    this.obra.tipo_teto_forro_gesso = false;
    this.obra.tipo_teto_forro_drywall = false;
    this.obra.tipo_teto_forro_madeira = false;
    this.obra.userId =  Number(localStorage.getItem('user_id'));
    if (this.route.snapshot.paramMap.has('id')) {
      var editid = this.route.snapshot.paramMap.get('id');
      this.obraService.getById(Number(editid))
        .then((o: Obra) => {
          this.obra = o;
          this.isEdit = true;
        })
        .catch((e) =>{
          this.toastService.show("Erro ao Editar Obra",2);
          this.router.navigate(['/cadastro-obra']);
        })

    }
  }

}
