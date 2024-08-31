import { Component } from '@angular/core';
import { Chat1Component } from "../chat1/chat1.component";
import { Chat2Component } from "../chat2/chat2.component";
import { Mensaje } from '../Models/mensaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [Chat1Component, Chat2Component,CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {


  conversacion:Mensaje[]=[]


  mensajeRecibido(msj : Mensaje){

    this.conversacion.push(msj)

  }



}
