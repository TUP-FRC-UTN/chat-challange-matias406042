import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../Models/mensaje';

@Component({
  selector: 'app-chat1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat1.component.html',
  styleUrl: './chat1.component.css'
})
export class Chat1Component {

  @Output() mensajeEnviado = new EventEmitter<Mensaje>();
   txtAreaContenido :string = ""
   

   enviar():void {
       const mensaje = new Mensaje("1",this.txtAreaContenido)
       this.mensajeEnviado.emit(mensaje)
  }

}
