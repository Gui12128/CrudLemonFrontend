import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.scss']
})
export class PerguntaComponent implements OnInit {

  @Input() cadastros!:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
