import {QuestionType} from '../questions-service/questions.model';

export const QuesSet:QuestionType[]=[
    {
        key:1,
        title:"what's your name",
        type:"single type",
        options:["a"],
        checkbox:[true]
    },
    {
        key:2,
        title:"what's your location",
        type:"single type",
        options:["b"],
        checkbox:[true]
    },
    {
        key:3,
        title:"what's your pet name",
        type:"single type",
        options:["c"],
        checkbox:[true]
    },
    {
        key:4,
        title:"select the state of India",
        type:"multiple type",
        options:["a","b","c","d","e","f"],
        checkbox:[true,true,true,false,false,false]
    }
]