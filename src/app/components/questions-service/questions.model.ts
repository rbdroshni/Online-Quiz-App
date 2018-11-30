export class QuestionType{
    id:number;
    title:string;
    type:string;
    optionsArray:[
        {
        optText:string,
        isCorrectb:boolean
        }
    ];   
}

// key: 0,
// title: '',
// type:'',
// optionsArray:[
//   {
//     optText:'',
//     isCorrect:''
//   }
// ]