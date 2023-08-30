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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-obra', component: ObraComponent},
  {path: 'form-obra', component: FormObraComponent},
  {path: 'form-obra/:id', component: FormObraComponent},
  {path: 'cadastro-fornecedor', component: FornecedorComponent},
  {path: 'cadastro-aquisicoes', component: AquisicoesComponent},
  {path: 'cadastro-servicos', component: ServicosComponent},
  {path: 'relatorios', component: RelatoriosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
