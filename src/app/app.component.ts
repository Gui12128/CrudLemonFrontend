import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CrudLemonFront';
  cadastros: any[] = [];

  cadastrar($event: any){
    console.log($event);
    const cadastro = {...$event, data: new Date()};
    this.cadastros.push(cadastro);
  }
}
