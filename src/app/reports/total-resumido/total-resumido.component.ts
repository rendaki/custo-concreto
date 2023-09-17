import { ToastService } from './../../services/toast.service';
import { ReportTotalResumido } from './../../model/report-total-resumido';
import { ObraAquisoesServicos } from './../../model/obra.aquisoes.servicos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-resumido',
  templateUrl: './total-resumido.component.html',
  styleUrls: ['./total-resumido.component.css']
})
export class TotalResumidoComponent {
  @Input() obraAqServ!: ObraAquisoesServicos
  totalResumido!: ReportTotalResumido
  legendaGrafico: Array<string> = new Array<string>()
  dadosGrafico: Array<number> = new Array<number>()
  tituloGrafico: string = '';
  ngOnInit()
  {
    this.totalResumido = new ReportTotalResumido();
    this.reportTotalResumido()
    this.gerarDadosGrafico()

  }
  gerarDadosGrafico() {
      this.tituloGrafico = "Aquisções e Serviços"
      this.legendaGrafico.push("Aquisições")
      this.legendaGrafico.push("Serviços")
      this.dadosGrafico.push(this.totalResumido.totalAquisicoes)
      this.dadosGrafico.push(this.totalResumido.totalServicos)

  }

  reportTotalResumido()
  {
    this.totalResumido.totalAquisicoes = this.obraAqServ.aquisicoes.reduce((total,aq)=> total+aq.valor,0);

    this.totalResumido.totalServicos = this.obraAqServ.servicos.reduce((total,sv)=> total+sv.valor,0);

    this.totalResumido.totalGeral = this.totalResumido.totalAquisicoes + this.totalResumido.totalServicos

    this.totalResumido.mediaMetroQuadrado = this.totalResumido.totalGeral/this.obraAqServ.area
  }
}
