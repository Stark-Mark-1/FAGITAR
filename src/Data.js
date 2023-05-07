import {TbBrandMiniprogram} from 'react-icons/tb'
import require from 'react'
export const links=[
    {
        name:"Home",
        path:'/'
    },
    {
        name:"About",
        path:'/about'
    },
    {
        name:"Blog",
        path:'/blog'
    },
    {
        name:"FagitAR",
        path:'/fagitAR'
    },
    {
        name:"Pricing",
        path:'/pricing'
    },
    {
        name:"Contact Us",
        path:'/contact'
    }
];
export const programs=[
    {
        id:1,
        icon:<TbBrandMiniprogram/>,
        title:"program one",
        info:"This is a sample card layout",
        path:"/programs/111",
    },
    {
        id:2,
        icon:<TbBrandMiniprogram/>,
        title:"program two",
        info:"This is a sample card layout",
        path:"/programs/222",
    },
    {
        id:3,
        icon:<TbBrandMiniprogram/>,
        title:"program three",
        info:"This is a sample card layout",
        path:"/programs/333",
    },
    {
        id:4,
        icon:<TbBrandMiniprogram/>,
        title:"program four",
        info:"This is a sample card layout",
        path:"/programs/444",
    },
]
export const faqs=[
    {
        id:1,
        question:"how FagitAR made ?",
        answer:"Dolor delectus natus id, voluptatibus tenetur esse laborum! Neque officia excepturi illo laborum. Magnam, debitis fugit. Facere dignissimos soluta labore debitis architecto?" 
    },
    {
        id:2,
        question:"how to register ?",
        answer:"Dolor delectus natus id, voluptatibus tenetur esse laborum! Neque officia excepturi illo laborum. Magnam, debitis fugit. Facere dignissimos soluta labore debitis architecto?"
    },
    {
        id:3,
        question:"What is plan for this ?",
        answer:"Dolor delectus natus id, voluptatibus tenetur esse laborum! Neque officia excepturi illo laborum. Magnam, debitis fugit. Facere dignissimos soluta labore debitis architecto?"

    },
    {
        id:4,
        question:"About FagitAR ?",
        answer:"Dolor delectus natus id, voluptatibus tenetur esse laborum! Neque officia excepturi illo laborum. Magnam, debitis fugit. Facere dignissimos soluta labore debitis architecto?"

    }
]




export const testimonials=[
    {
        id:1,
        name:"Alan",
        quote:"amet consectetur adipisicing elit. Exercitationem, expedita sunt voluptatum fuga eligendi ullam quae in perspiciatis illum a! Excepturi sequi quas nam. Adipisci ab quibusdam voluptatibus fugit reprehenderit?",
        job:"Doctor",
        avatar:require("./Images/1.jpeg")
    },
    {
        id:2,
        name:"Elon",
        quote:"amet consectetur adipisicing elit. Exercitationem, expedita sunt voluptatum fuga eligendi ullam quae in perspiciatis illum a! Excepturi sequi quas nam. Adipisci ab quibusdam voluptatibus fugit reprehenderit?",
        job:"student",
        avatar:require("./Images/2.jpeg")
    },
    {
        id:3,
        name:"Jorge",
        quote:"amet consectetur adipisicing elit. Exercitationem, expedita sunt voluptatum fuga eligendi ullam quae in perspiciatis illum a! Excepturi sequi quas nam. Adipisci ab quibusdam voluptatibus fugit reprehenderit?",
        job:"Engineer",
        avatar:require("./Images/3.jpeg")
    },
    {
        id:4,
        name:"Bassanio",
        quote:"amet consectetur adipisicing elit. Exercitationem, expedita sunt voluptatum fuga eligendi ullam quae in perspiciatis illum a! Excepturi sequi quas nam. Adipisci ab quibusdam voluptatibus fugit reprehenderit?",
        job:"Student",
        avatar:require("./Images/4.jpeg")
    },
    {
        id:5,
        name:"David",
        quote:"amet consectetur adipisicing elit. Exercitationem, expedita sunt voluptatum fuga eligendi ullam quae in perspiciatis illum a! Excepturi sequi quas nam. Adipisci ab quibusdam voluptatibus fugit reprehenderit?",
        job:"Engineer",
        avatar:require("./Images/5.jpeg")
    }
]


export const plans=[
    {
        id:1,
        name:'Silver Package',
        desc:"This package is perfect for small Buisness Venture Capital",
        price:1000,
        features:[
            {feature:'First Feature',available:true},
            {feature:'second Feature',available:true},
            {feature:'Third Feature',available:true},
            {feature:'Fourth Feature',available:true},
            {feature:'Fifth Feature',available:false},
            {feature:'Sixth Feature',available:false},
            {feature:'Seventh Feature',available:false},
            {feature:'Eighth Feature',available:false},
            {feature:'Ninth Feature',available:false},
            {feature:'Tenth Feature',available:false}
        ]
    },
    {
        id:2,
        name:'Gold Package',
        desc:"This package is for those who want expand their buisness",
        price:3000,
        features:[
            {feature:'First Feature',available:true},
            {feature:'second Feature',available:true},
            {feature:'Third Feature',available:true},
            {feature:'Fourth Feature',available:true},
            {feature:'Fifth Feature',available:true},
            {feature:'Sixth Feature',available:true},
            {feature:'Seventh Feature',available:true},
            {feature:'Eighth Feature',available:false},
            {feature:'Ninth Feature',available:false},
            {feature:'Tenth Feature',available:false}
        ]
    },
    {
        id:3,
        name:'Platinum Package',
        desc:"This package is for those who want try new things",
        price:7000,
        features:[
            {feature:'First Feature',available:true},
            {feature:'second Feature',available:true},
            {feature:'Third Feature',available:true},
            {feature:'Fourth Feature',available:true},
            {feature:'Fifth Feature',available:true},
            {feature:'Sixth Feature',available:true},
            {feature:'Seventh Feature',available:true},
            {feature:'Eighth Feature',available:true},
            {feature:'Ninth Feature',available:true},
            {feature:'Tenth Feature',available:true}
        ]
    },
]