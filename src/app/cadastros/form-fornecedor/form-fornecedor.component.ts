import { ToastService } from 'src/app/services/toast.service';
import { Fornecedor } from './../../model/fornecedor';
import { FornecedorService } from './../../services/fornecedor.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-fornecedor',
  templateUrl: './form-fornecedor.component.html',
  styleUrls: ['./form-fornecedor.component.css']
})
export class FormFornecedorComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fornecedorService: FornecedorService,
    private toastService: ToastService

  ) { }
  fornecedor!: Fornecedor;
  isEdit: boolean = false;

  ngOnInit() {
    M.AutoInit();
    this.initObj();
  }
  onSubmit() {
     if (this.isEdit) {
       this.fornecedorService.update(this.fornecedor).subscribe(
        {
          next: (f) => {
            this.isEdit = false;
            this.toastService.show("Edição Fornecedor Salva com Sucesso!",1);
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Fornecedor!",2);

          }
        }
       );

     }
     else {
      this.fornecedorService.save(this.fornecedor).subscribe(
        {
          next: (f) => {
            this.toastService.show("Fornecedor Salvo com Sucesso!",1);
          },
          error: (error) => {
            this.toastService.show("Erro ao Salvar Fornecedor!",2);

          }
        }
       );
     }
     this.router.navigate(['/cadastro-fornecedor']);
  }

  initObj() {

    this.fornecedor = new Fornecedor();
    this.fornecedor.identificador = '';
    this.fornecedor.endereco = '';
    this.fornecedor.categoria = ' ';
    this.fornecedor.userId = Number(localStorage.getItem('user_id'));
    if (this.route.snapshot.paramMap.has('id')) {
      var editid = this.route.snapshot.paramMap.get('id');
      this.fornecedorService.getById(Number(editid)).subscribe(
        {
          next: (f) => {
            this.fornecedor = f;
            this.isEdit = true;
          },
          error: (error) => {
            this.toastService.show("Erro ao Editar Fornecedor!",2);
            this.router.navigate(['/cadastro-fornecedor']);
          }
        }
      )
    }
  }

}
