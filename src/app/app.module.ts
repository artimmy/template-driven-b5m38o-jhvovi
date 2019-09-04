import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicoService } from './servico.service';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormComponent, TabelaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
