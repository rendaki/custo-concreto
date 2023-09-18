import { FormServicosComponent } from './cadastros/form-servicos/form-servicos.component';
import { FormAquisicoesComponent } from './cadastros/form-aquisicoes/form-aquisicoes.component';
import { FormObraComponent } from './cadastros/form-obra/form-obra.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FornecedorComponent } from './cadastros/fornecedor/fornecedor.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ServicosComponent } from './cadastros/servicos/servicos.component';
import { AquisicoesComponent } from './cadastros/aquisicoes/aquisicoes.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraComponent } from './cadastros/obra/obra.component';
import { FormFornecedorComponent } from './cadastros/form-fornecedor/form-fornecedor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-obra', component: ObraComponent},
  {path: 'cadastro-obra/:msg', component: ObraComponent},
  {path: 'form-obra', component: FormObraComponent},
  {path: 'form-obra/:id', component: FormObraComponent},
  {path: 'cadastro-fornecedor', component: FornecedorComponent},
  {path: 'form-fornecedor', component: FormFornecedorComponent},
  {path: 'form-fornecedor/:id', component: FormFornecedorComponent},
  {path: 'cadastro-aquisicoes', component: AquisicoesComponent},
  {path: 'form-aquisicoes', component: FormAquisicoesComponent},
  {path: 'form-aquisicoes/:id', component: FormAquisicoesComponent},
  {path: 'cadastro-servicos', component: ServicosComponent},
  {path: 'form-servicos', component: FormServicosComponent},
  {path: 'form-servicos/:id', component: FormServicosComponent},
  {path: 'relatorios', component: RelatoriosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
