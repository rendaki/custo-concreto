import { ReportTotalFornecedor } from './../../model/report-total-fornecedor';
import { Fornecedor } from './../../model/fornecedor';
import { Aquisicao } from './../../model/aquisicao';
import { LoginComponent } from './../../login/login.component';
import { Component, Input } from '@angular/core';
import { ObraAquisoesServicos } from 'src/app/model/obra.aquisoes.servicos';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-total-fornecedor',
  templateUrl: './total-fornecedor.component.html',
  styleUrls: ['./total-fornecedor.component.css']
})
export class TotalFornecedorComponent {
  constructor(
    private fornecedorService: FornecedorService
  ) { }

  @Input() obraAqServ!: ObraAquisoesServicos
  totalFornecedores: Array<ReportTotalFornecedor> = new Array<ReportTotalFornecedor>()
  private totalFornecedor!: ReportTotalFornecedor;
  legendaGrafico: Array<string> = new Array<string>()
  dadosGrafico: Array<number> = new Array<number>()
  tituloGrafico: string = '';

  ngOnInit() {

    this.reportTotalPorFornecedor()
    setTimeout(() => {
      this.gerarDadosGrafico()
    }, 1000);


  }
  gerarDadosGrafico() {
    this.totalFornecedores.forEach(fornecedor => {
      this.tituloGrafico = "Total por Fornecedor"
      this.legendaGrafico.push(fornecedor.nomeFornecedor)
      this.dadosGrafico.push(fornecedor.valorTotal)
    });
  }

  reportTotalPorFornecedor() {

    var aqFornIds = this.obraAqServ.aquisicoes.map(fornecedor => fornecedor.fornecedorId);
    aqFornIds = aqFornIds.filter((item, index) => aqFornIds.indexOf(item) === index);

    aqFornIds.forEach(fornecedorId => {
      const total = this.obraAqServ.aquisicoes.filter(aquisicao => {

        return (aquisicao.fornecedorId === fornecedorId);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });


      this.fornecedorService.getById(Number(fornecedorId)).subscribe(
        {
          next: (f) => {
            this.totalFornecedor = new ReportTotalFornecedor();
            this.totalFornecedor.nomeFornecedor = f.identificador
            this.totalFornecedor.valorTotal = total
            this.totalFornecedores.push(this.totalFornecedor);
          }
        }
      )
    });


    var svFornIds = this.obraAqServ.servicos.map(fornecedor => fornecedor.fornecedorId);
    svFornIds = svFornIds.filter((item, index) => svFornIds.indexOf(item) === index);


    svFornIds.forEach(fornecedorId => {
      const total = this.obraAqServ.servicos.filter(servico => {

        return (servico.fornecedorId === fornecedorId);

      }).map(item => {

        return item.valor

      }).reduce((total, valor) => {

        return total + valor;

      });
      this.fornecedorService.getById(Number(fornecedorId)).subscribe(
        {
          next: (f) => {
            this.totalFornecedor = new ReportTotalFornecedor();
            this.totalFornecedor.nomeFornecedor = f.identificador
            this.totalFornecedor.valorTotal = total
            this.totalFornecedores.push(this.totalFornecedor);

          }
        }
      )
    });

  }
}
