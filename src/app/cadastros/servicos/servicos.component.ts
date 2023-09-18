import { ServicoObra } from './../../model/servico.obra';
import { ServicoService } from './../../services/servico.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraService } from 'src/app/services/obra.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicoService: ServicoService,
    private obraService: ObraService,
    private toastService: ToastService
  ) { }

  table = Array<ServicoObra>();
  servicoObra: ServicoObra = new ServicoObra();
  userId!: string;


  ngOnInit(): void {
    this.userId = String(localStorage.getItem('user_id'));

    this.loadData();
    M.AutoInit();
  }
  delete(id: number) {
    if (confirm("Deseja excluir?")) {
      this.servicoService.delete(id).subscribe(
        {
          next: (a) => {
            this.loadData();
            this.toastService.show("Serviço Deletado!", 1)

          },
          error: (error) => {
            this.toastService.show("Erro ao Deletar Serviço!", 2)
          }
        }
      );
    }
  }
  edit(itemid: number) {
    this.router.navigate(['form-servicos', { id: itemid }]);
  }

  loadData() {

    this.table = Array<ServicoObra>();
    this.servicoService.getAllWithObra(Number(this.userId)).subscribe(
      {
        next: (f) => {
          f.forEach(element => {
            this.servicoObra = element
            this.table.push(this.servicoObra)
          });
        }
      }
    )
  }
}
