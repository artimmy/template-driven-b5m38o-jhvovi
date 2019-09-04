import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Cliente } from '../dados';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private cliente:Cliente = new Cliente();
  constructor(private s:ServicoService) { }

  ngOnInit() {
  }

  add(){
    this.s.add(this.cliente);
    this.cliente = new Cliente();
  }

}