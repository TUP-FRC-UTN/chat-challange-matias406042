import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../Models/mensaje';

@Component({
  selector: 'app-chat2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat2.component.html',
  styleUrl: './chat2.component.css'
})
export class Chat2Component {

  @Output() mensajeEnviado = new EventEmitter<Mensaje>();
  txtAreaContenido :string = ""

  enviar():void {
    const mensaje = new Mensaje("2",this.txtAreaContenido)
    this.mensajeEnviado.emit(mensaje)
}

}
