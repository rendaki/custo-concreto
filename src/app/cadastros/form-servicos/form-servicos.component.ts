import { Servico } from './../../model/servico';
import { ServicoService } from './../../services/servico.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/model/fornecedor';
import { Obra } from 'src/app/model/obra';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { ObraService } from 'src/app/services/obra.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form-servicos',
  templateUrl: './form-servicos.component.html',
  styleUrls: ['./form-servicos.component.css']
})
export class FormServicosComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicoService: ServicoService,
    private obraService: ObraService,
    private fornecedorService: FornecedorService,
    private toastService: ToastService,

      ) { }
  servico!: Servico;
  isEdit: boolean = false;
  userId!: number;
  obras = Array<Obra>();
  fornecedores = Array<Fornecedor>();

  ngOnInit() {
    M.AutoInit();
    this.loadData();
    this.initObj();
  }

  onSubmit() {
     if (this.isEdit) {
       this.servicoService.update(this.servico).subscribe(
        {
          next: (f) => {
            this.isEdit = false;
            this.toastService.show("Edição Serviço Salva com Sucesso!",1)
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Serviço!",2)

          }
        }
       );

     }
     else {
      this.servicoService.save(this.servico).subscribe(
        {
          next: (f) => {
            this.toastService.show("Serviço Salvo com Sucesso!",1)

          },
          error: (error) => {
            this.toastService.show("Erro ao Salvar Serviço!",2)
          }
        }
       );
     }
     this.router.navigate(['/cadastro-servicos']);

  }
  loadData()
  {
    this.obras = Array<Obra>();
    this.userId = Number(localStorage.getItem('user_id'));
    this.obraService.getAll(this.userId).then((o: Obra[]) => {
      o.forEach(element => {
        this.obras.push(element)
      });
    })
    this.fornecedorService.getAllByCategoria(this.userId,'s').subscribe(
      {
        next: (f) => {
          f.forEach(element => {
            this.fornecedores.push(element)
          });
        }
      })
  }
  initObj() {

    this.servico = new Servico();
    this.servico.servico = '';
    this.servico.valor = 0;
    this.servico.categoria = ' ';
    this.servico.fornecedorId = 0;
    this.servico.fase = ' ';
    this.servico.userId = Number(localStorage.getItem('user_id'));
    if (this.route.snapshot.paramMap.has('id')) {
      var editid = this.route.snapshot.paramMap.get('id');
      this.servicoService.getById(Number(editid)).subscribe(
        {
          next: (f) => {
            this.servico = f;
            this.isEdit = true;
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Serviço!",2)
            this.router.navigate(['/cadastro-servicos']);
          }
        }
      )
    }
  }
}
