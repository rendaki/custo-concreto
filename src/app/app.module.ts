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
    FormObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
