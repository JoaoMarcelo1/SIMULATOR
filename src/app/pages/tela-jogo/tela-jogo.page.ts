import { Component, OnInit } from '@angular/core';
import { question ,questionAnswer } from 'src/app/models/question';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-tela-jogo',
  templateUrl: './tela-jogo.page.html',
  styleUrls: ['./tela-jogo.page.scss'],
})
export class TelaJogoPage implements OnInit {
    
  curQuesion: question;
  questionIndex: number = 0;


  constructor(private questionservice: QuestionService) { }

  ngOnInit() {
    this.curQuesion = this.questionservice.questions[this.questionIndex];
  }

  doAnswer(answer: questionAnswer) {
    if(answer.isRight) {
      this.questionIndex++;
      this.curQuesion = this.questionservice.questions[this.questionIndex];
    }

}
}
