import {UilEstate, UilChart , UilMoneyWithdrawal,UilClipboardAlt , UilUsersAlt , UilPackage,UilUsdSquare} from '@iconscout/react-unicons'
export const sidebarData=[
    {
        icon: <UilEstate/> ,
        heading:"Dashboard"
    },
    {
        icon:< UilClipboardAlt/>,
        heading:"Orders"
    },
    {
        icon: <UilUsersAlt/> ,
        heading:"Customers"
    },
    {
        icon: <UilPackage/> ,
        heading:"Products"
    },
    {
        icon: <UilClipboardAlt/> ,
        heading:"Orders"
    },
    {
        icon:< UilChart/> ,
        heading:"Analytics"
    }
]
export const cardsData=[
    {
        title:"Revenue",
        color:{
            backGround :"linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%)",
            boxShadow :"0px 10px 20px 0px #FDC0C7",
        },
        barValue:80,
        value:"14,270",
        png:<UilMoneyWithdrawal/>,
        series:[
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,40]
            }, 
        ],
    },
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, #FF919D 0%, #FC929D 100.00%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"25,790",
        png:<UilUsdSquare/>,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100]
            }, 
        ],
    },
    {
        title:"Expenses",
        color:{
            backGround:"linear-gradient(rgb(248 212 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B",
        },
        barValue:60,
        value:"4,290",
        png:<UilClipboardAlt/>,
        series:[
            {
                name:"Expenses",
                data:[10,425,15,30,12,15,20]
            }, 
        ],
    }
]
export const updatesData=[
    {
        img:"https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        name:"John Snow",
        order:"has ordered the mandi biryani",
        time:"10 seconds ago"
    },
    {
        img:"https://cdn-www.comingsoon.net/assets/uploads/2022/06/emilia-clarke-daenerys-targaryen-game-of-thrones-hbo.jpg",
        name:"Daenyris",
        order:"has ordered the chicken joint biryani",
        time:"25 seconds ago"
    },
    {
        img:"https://image.scoopwhoop.com/w360/s3.scoopwhoop.com/anj/sw/d9eecb0a-6138-4283-bb4a-e865be902a00.jpg.webp",
        name:"Jaime Lannister",
        order:"has ordered the chicken Wings",
        time:"30 seconds ago"
    }
]