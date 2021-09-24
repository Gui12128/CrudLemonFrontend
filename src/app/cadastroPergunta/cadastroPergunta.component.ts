import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-cadastroPergunta',
    templateUrl: './cadastroPergunta.component.html',
    styleUrls:['./cadastroPergunta.component.scss']
})
export class CadastroPerguntaComponent{

  @Output() aoCadastrar = new EventEmitter<any>();

  titulo!: string;
  marcaCarro!:string;
  modeloCarro!:string;
  mensagem!: string;
  email!: string;


  cadastrar(){
    console.log('Pergunta cadastrada');
    const perguntaEmitir = {
      titulo: this.titulo,
      marcaCarro: this.marcaCarro,
      modeloCarro: this.modeloCarro,
      mensagem: this.mensagem,
      email: this.email
    };
    this.aoCadastrar.emit(perguntaEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.titulo = " ";
    this.marcaCarro = " ";
    this.modeloCarro = " ";
    this.mensagem = " ";
    this.email = " "
  }

}
