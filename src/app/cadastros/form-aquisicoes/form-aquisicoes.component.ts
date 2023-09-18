import { ToastService } from 'src/app/services/toast.service';
import { Fornecedor } from './../../model/fornecedor';
import { Obra } from 'src/app/model/obra';
import { Aquisicao } from './../../model/aquisicao';
import { AquisicaoService } from './../../services/aquisicao.service';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraService } from 'src/app/services/obra.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-form-aquisicoes',
  templateUrl: './form-aquisicoes.component.html',
  styleUrls: ['./form-aquisicoes.component.css']
})
export class FormAquisicoesComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aquisicaoService: AquisicaoService,
    private obraService: ObraService,
    private fornecedorService: FornecedorService,
    private toastService: ToastService,

      ) { }
  aquisicao!: Aquisicao;
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
       this.aquisicaoService.update(this.aquisicao).subscribe(
        {
          next: (f) => {
            this.isEdit = false;
            this.toastService.show("Edição Aquisição Salva com Sucesso!",1)
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Aquisição!",2)

          }
        }
       );

     }
     else {
      this.aquisicaoService.save(this.aquisicao).subscribe(
        {
          next: (f) => {
            this.toastService.show("Aquisição Salva com Sucesso!",1)

          },
          error: (error) => {
            this.toastService.show("Erro ao Salvar Aquisição!",2)
          }
        }
       );
     }
     this.router.navigate(['/cadastro-aquisicoes']);

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
    this.fornecedorService.getAllByCategoria(this.userId,'p').subscribe(
      {
        next: (f) => {
          f.forEach(element => {
            this.fornecedores.push(element)
          });
        }
      })
  }
  initObj() {

    this.aquisicao = new Aquisicao();
    this.aquisicao.produto = '';
    this.aquisicao.valor = 0;
    this.aquisicao.categoria = ' ';
    this.aquisicao.fornecedorId = 0;
    this.aquisicao.fase = ' ';
    this.aquisicao.userId = Number(localStorage.getItem('user_id'));
    if (this.route.snapshot.paramMap.has('id')) {
      var editid = this.route.snapshot.paramMap.get('id');
      this.aquisicaoService.getById(Number(editid)).subscribe(
        {
          next: (f) => {
            this.aquisicao = f;
            this.isEdit = true;
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Aquisição!",2)
            this.router.navigate(['/cadastro-aquisicoes']);
          }
        }
      )
    }
  }
}
