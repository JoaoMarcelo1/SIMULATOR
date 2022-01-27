import { Component, OnInit } from '@angular/core';
import { question ,questionAnswer } from 'src/app/models/question';

@Component({
  selector: 'app-tela-jogo',
  templateUrl: './tela-jogo.page.html',
  styleUrls: ['./tela-jogo.page.scss'],
})
export class TelaJogoPage implements OnInit {

  questions: question[] = [

    {
      title: 'Pergunta 1',
      respostas: [
        {description: 'Resposta 1 P1', isRight: false},
        {description: 'Resposta 2 P1', isRight: true},
        {description: 'Resposta 3 P1', isRight: false},
        {description: 'Resposta 4 P1', isRight: false},
      ]
    },

    {
      title: 'Pergunta 2',
      respostas: [
        {description: 'Resposta 1 P2', isRight: true},
        {description: 'Resposta 2 P2', isRight: false},
        {description: 'Resposta 3 P2', isRight: false},
        {description: 'Resposta 4 P2', isRight: false},
      ]
    },

    {
      title: 'Pergunta 3',
       respostas: [
        {description: 'Resposta 1 P3', isRight: false},
        {description: 'Resposta 2 P3', isRight: false},
        {description: 'Resposta 3 P3', isRight: false},
        {description: 'Resposta 4 P3', isRight: true},
      ]
    }

  ];
    
  curQuesion: question;
  questionIndex: number = 0;


  constructor() { }

  ngOnInit() {
    this.curQuesion = this.questions[this.questionIndex];
  }

  doAnswer(answer: questionAnswer) {
    if(answer.isRight) {
      this.questionIndex++;
      this.curQuesion = this.questions[this.questionIndex];
    }

}
}
