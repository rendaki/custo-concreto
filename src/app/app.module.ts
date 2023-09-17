import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ObraComponent } from './cadastros/obra/obra.component';
import { FornecedorComponent } from './cadastros/fornecedor/fornecedor.component';
import { AquisicoesComponent } from './cadastros/aquisicoes/aquisicoes.component';
import { ServicosComponent } from './cadastros/servicos/servicos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { HomeComponent } from './home/home.component';
import { FormObraComponent } from './cadastros/form-obra/form-obra.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFornecedorComponent } from './cadastros/form-fornecedor/form-fornecedor.component';
import { FormAquisicoesComponent } from './cadastros/form-aquisicoes/form-aquisicoes.component';
import { FormServicosComponent } from './cadastros/form-servicos/form-servicos.component';
import { TotalResumidoComponent } from './reports/total-resumido/total-resumido.component';
import { TotalFornecedorComponent } from './reports/total-fornecedor/total-fornecedor.component';
import { TotalFaseComponent } from './reports/total-fase/total-fase.component';
import { TotalCategoriaComponent } from './reports/total-categoria/total-categoria.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ObraComponent,
    FornecedorComponent,
    AquisicoesComponent,
    ServicosComponent,
    RelatoriosComponent,
    HomeComponent,
    FormObraComponent,
    FormFornecedorComponent,
    FormAquisicoesComponent,
    FormServicosComponent,
    TotalResumidoComponent,
    TotalFornecedorComponent,
    TotalFaseComponent,
    TotalCategoriaComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
