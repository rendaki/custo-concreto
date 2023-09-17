import { AquisicaoObra } from './../../model/aquisicao.obra';
import { Obra } from 'src/app/model/obra';
import { ObraService } from 'src/app/services/obra.service';
import { ToastService } from 'src/app/services/toast.service';
import { AquisicaoService } from './../../services/aquisicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aquisicao } from './../../model/aquisicao';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aquisicoes',
  templateUrl: './aquisicoes.component.html',
  styleUrls: ['./aquisicoes.component.css']
})
export class AquisicoesComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aquisicaoService: AquisicaoService,
    private obraService: ObraService,
    private toastService: ToastService
  ) { }

  table = Array<AquisicaoObra>();
  aquisicaoObra: AquisicaoObra = new AquisicaoObra();
  userId!: string;


  ngOnInit(): void {
    this.userId = String(localStorage.getItem('user_id'));

    this.loadData();
    M.AutoInit();
  }
  delete(id: number) {
    if (confirm("Deseja excluir?")) {
      this.aquisicaoService.delete(id).subscribe(
        {
          next: (a) => {
            this.loadData();
            this.toastService.show("Aquisição Deletada!", 1)

          },
          error: (error) => {
            this.toastService.show("Erro ao Deletar Aquisição!", 2)
          }
        }
      );
    }
  }
  edit(itemid: number) {
    this.router.navigate(['form-aquisicoes', { id: itemid }]);
  }

  loadData() {

    this.table = Array<AquisicaoObra>();
    this.aquisicaoService.getAllWithObra(Number(this.userId)).subscribe(
      {
        next: (f) => {
          f.forEach(element => {
            this.aquisicaoObra = element
            this.table.push(this.aquisicaoObra)
          });
        }
      }
    )
  }

}
