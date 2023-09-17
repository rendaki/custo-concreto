import { ReportTotalFase } from './../../model/report-total-fase';
import { Component, Input } from '@angular/core';
import { ObraAquisoesServicos } from 'src/app/model/obra.aquisoes.servicos';

@Component({
  selector: 'app-total-fase',
  templateUrl: './total-fase.component.html',
  styleUrls: ['./total-fase.component.css']
})
export class TotalFaseComponent {
  @Input() obraAqServ!: ObraAquisoesServicos
  totalFases: Array<ReportTotalFase> = new Array<ReportTotalFase>()
  private totalFase!: ReportTotalFase;
  legendaGrafico: Array<string> = new Array<string>()
  dadosGrafico: Array<number> = new Array<number>()
  tituloGrafico: string = '';
  ngOnInit() {

    this.reportTotalPorFase()
    this.gerarDadosGrafico()

  }
  gerarDadosGrafico() {
    this.totalFases.forEach(fases => {
      this.tituloGrafico = "Total por Fase"
      this.legendaGrafico.push(fases.fase)
      this.dadosGrafico.push(fases.valorTotal)
    });
  }
  reportTotalPorFase() {

    var aqFases = this.obraAqServ.aquisicoes.map(fornecedor => fornecedor.fase);
    aqFases = aqFases.filter((item, index) => aqFases.indexOf(item) === index);

    aqFases.forEach(fase => {
      const total = this.obraAqServ.aquisicoes.filter(aquisicao => {

        return (aquisicao.fase === fase);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });
      this.totalFase = new ReportTotalFase();
      this.totalFase.fase = this.getNomeFase(fase)
      this.totalFase.valorTotal = total
      this.totalFases.push(this.totalFase);


    });


    var svFases = this.obraAqServ.servicos.map(fornecedor => fornecedor.fase);
    svFases = svFases.filter((item, index) => svFases.indexOf(item) === index);


    svFases.forEach(fase => {
      const total = this.obraAqServ.servicos.filter(servico => {

        return (servico.fase === fase);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });
      this.totalFase = new ReportTotalFase();
      this.totalFase.fase = this.getNomeFase(fase)
      this.totalFase.valorTotal = total
      let achou = false
      this.totalFases.forEach((item, index) => {
        if (item.fase == this.totalFase.fase) {
          let valor = item.valorTotal + this.totalFase.valorTotal
          this.totalFases[index].valorTotal = valor
          achou = true
          return
        }
      });
      if (!achou) {
        this.totalFases.push(this.totalFase);
      }

    });
  }
  getNomeFase(fase: string): string {
    let nomeFase = ""

    switch (fase) {
      case "pro":
      {
        nomeFase = "Projetos"
        break;
      }
      case "pt":
        {
          nomeFase = "Preparação Terreno"
          break;
        }
      case "f":
        {
          nomeFase = "Fundação"
          break;
        }
      case "pv":
        {
          nomeFase = "Pavimentos"
          break;
        }
      case "c":
        {
          nomeFase = "Cobertura"
          break;
        }
      case "a":
        {
          nomeFase = "Acabamento"
          break;
        }
    }

    return nomeFase;
  }
}
