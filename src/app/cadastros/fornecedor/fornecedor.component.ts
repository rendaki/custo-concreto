import { ToastService } from './../../services/toast.service';
import { Fornecedor } from './../../model/fornecedor';
import { FornecedorService } from './../../services/fornecedor.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fornecedorService: FornecedorService,
    private toastService: ToastService
  ) { }
  table = Array<Fornecedor>();
  fornecedor: Fornecedor = new Fornecedor();
  userId!: number

  ngOnInit(): void {
    this.loadData();
    M.AutoInit();
  }
  delete(id: number) {
    this.router.navigate(['cadastro-fornecedor']);

    if (confirm("Deseja excluir?")) {
      this.fornecedorService.delete(id).subscribe(
        {
          next: (f) => {
            this.loadData();
            this.toastService.show("Fornecedor Deletado!",1);

          },
          error: (error) => {
            this.toastService.show("Erro ao Deletar Fornecedor!",2);
          }
        }
      );
    }
  }
  edit(itemid: number) {
    this.router.navigate(['form-fornecedor', { id: itemid }]);
  }
  getCategoria(c: string)
  {
    var resp = "";
    switch(c)
    {
      case "p":
      {
        resp = "Produto";
        break;
      }
      case "s":
      {
        resp = "Serviço";
        break;
      }
      default: resp ="";
    }
    return resp;
  }
  loadData() {

    this.table = Array<Fornecedor>();
    this.userId = Number(localStorage.getItem('user_id'));
    this.fornecedorService.getAll(this.userId).subscribe(
      {
        next: (f) => {
          f.forEach(element => {
            this.fornecedor = element
            this.table.push(this.fornecedor)
          });
        },
        error: (error) => {
          console.log('erro');
        }
      }
    )
  }

}
