export interface question{
   title: string;
   level?: number;
   respostas: questionAnswer[];

}

export interface questionAnswer{

    description: string;
    //para saber a resposta correta
    isRight: boolean;
    
}