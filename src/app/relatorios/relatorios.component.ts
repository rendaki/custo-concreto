import { ObraAquisoesServicos } from './../model/obra.aquisoes.servicos';
import { ObraService } from 'src/app/services/obra.service';
import { Obra } from 'src/app/model/obra';
import { AquisicaoObra } from './../model/aquisicao.obra';
import { Component, OnInit } from '@angular/core';
import { AquisicaoService } from '../services/aquisicao.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent {

voltar() {
  this.obraId = 0;
  this.relatorio = ' ';
}

  constructor(
    private obraService: ObraService,
  ) { }

  obraId!: number;
  userId!: number;
  relatorio!: string;

  obraAqServ: ObraAquisoesServicos = new ObraAquisoesServicos();
  obras = Array<Obra>();

  ngOnInit() {
    this.obraId = 0;
    this.relatorio = ' ';
    this.userId = Number(localStorage.getItem('user_id'));
    this.obraService.getAll(this.userId).then((o: Obra[]) => {
      o.forEach(element => {
        this.obras.push(element)
      });
    })

  }

  getDataFromObra(obraId: number) {
    this.relatorio = ' '
    this.obraService.getAllFull(this.userId, obraId)
      .then((o: ObraAquisoesServicos[]) => {
        this.obraAqServ = o[0];

      })
      .catch((e) => {

      })
  }


}
