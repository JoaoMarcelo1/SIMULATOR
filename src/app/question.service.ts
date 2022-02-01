import { Injectable } from '@angular/core';
import { question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: question[] = [

    {
      title: 'Pergunta 1',
      respostas: [
        {description: 'Resposta 1 P1', isRight: false},
        {description: 'Resposta 2 P1', isRight: true},
        {description: 'Resposta 3 P1', isRight: false},
        {description: 'Resposta 4 P1', isRight: false},
      ],
    },

    {
      title: 'Pergunta 2',
      respostas: [
        {description: 'Resposta 1 P2', isRight: true},
        {description: 'Resposta 2 P2', isRight: false},
        {description: 'Resposta 3 P2', isRight: false},
        {description: 'Resposta 4 P2', isRight: false},
      ],
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

  constructor() { }
}
