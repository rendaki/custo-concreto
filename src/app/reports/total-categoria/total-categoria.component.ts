import { ReportTotalCategoria } from './../../model/report-total-categoria';
import { Component, Input } from '@angular/core';
import { ObraAquisoesServicos } from 'src/app/model/obra.aquisoes.servicos';

@Component({
  selector: 'app-total-categoria',
  templateUrl: './total-categoria.component.html',
  styleUrls: ['./total-categoria.component.css']
})
export class TotalCategoriaComponent {
  @Input() obraAqServ!: ObraAquisoesServicos
  totalCategorias: Array<ReportTotalCategoria> = new Array<ReportTotalCategoria>()
  private totalCategoria!: ReportTotalCategoria;
  legendaGrafico: Array<string> = new Array<string>()
  dadosGrafico: Array<number> = new Array<number>()
  tituloGrafico: string = '';

  ngOnInit() {

    this.reportTotalPorCategoria()
    this.gerarDadosGrafico();

  }
  gerarDadosGrafico() {
    this.totalCategorias.forEach(categoria => {
      this.tituloGrafico = "Total por Fase"
      this.legendaGrafico.push(categoria.categoria)
      this.dadosGrafico.push(categoria.valorTotal)
    });
  }
  reportTotalPorCategoria() {

    var aqCategorias = this.obraAqServ.aquisicoes.map(fornecedor => fornecedor.categoria);
    aqCategorias = aqCategorias.filter((item, index) => aqCategorias.indexOf(item) === index);

    aqCategorias.forEach(categoria=> {
      const total = this.obraAqServ.aquisicoes.filter(aquisicao => {

        return (aquisicao.categoria === categoria);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });
      this.totalCategoria = new ReportTotalCategoria();
      this.totalCategoria.categoria = this.getNomeCategoria(categoria)
      this.totalCategoria.valorTotal = total
      this.totalCategorias.push(this.totalCategoria);

    });


    var svCategorias = this.obraAqServ.servicos.map(fornecedor => fornecedor.categoria);
    svCategorias = svCategorias.filter((item, index) => svCategorias.indexOf(item) === index);


    svCategorias.forEach(categoria => {
      const total = this.obraAqServ.servicos.filter(servico => {

        return (servico.categoria === categoria);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });
      this.totalCategoria = new ReportTotalCategoria();
      this.totalCategoria.categoria = this.getNomeCategoria(categoria)
      this.totalCategoria.valorTotal = total
      this.totalCategorias.push(this.totalCategoria);

    });

  }
  getNomeCategoria(categoria: string): string {
    let nomeCategoria = ""
    switch (categoria) {
      case "mb":
        {
          nomeCategoria = "Material Básico"
          break;
        }
      case "fa":
        {
          nomeCategoria = "Ferro/Aço"
          break;
        }

      case "e":
        {
          nomeCategoria = "Elétrica"
          break;
        }
      case "hg":
        {
          nomeCategoria = "Hidráulica/Gás"
          break;
        }
      case "pr":
        {
          nomeCategoria = "Pisos/Revestimentos"
          break;
        }
        case "p":
        {
          nomeCategoria = "Projetos"
          break;
        }
        case "la":
        {
          nomeCategoria = "Licenças/Alvarás"
          break;
        }
        case "ex":
        {
          nomeCategoria = "Execução"
          break;
        }
    }

    return nomeCategoria;
  }
}
