import {Card} from "./components/Card"
import "./App.css"
import pic1 from './image/c.png'
import pic2 from './image/d.png'
import pic3 from './image/o.png'
import pic4 from './image/sushi.png'


function App() {
  const data = [
    {
      img: pic1,
      title:"unagari uramaki",
      ingredienty:"ugor, avokado, slivochnyi syr, oguec, sous unagi,kunjut",
      cena: "1900,00 TG",
      wtuk:"8 wtuk",
      kaloriinostkkal: "kkal 298",
      btnB: "-",
      btnC: "+",
      btnD: "dobavit v korzinu"
    },

{

      img: pic2,
      title:"madrid roll",
      ingredienty:"Losos, avokado, spaisi sous, perec chili, ikra tobiko",
      cena: "1100,00 TG",
      wtuk:"8 wtuk",
      kaloriinostkkal:"kkal 275",
      btnB: "-",
      btnC: "+",
      btnD: "dobavit v korzinu"
},
{         
      img: pic3,
      title:"teplaya krevetka s mocarelloi",
      ingredienty:"teplyi roll, krevetka, tamato, ogurec, slivochnyi syr, ikra tobiko, syr mocarella",
      cena: "1700,00 TG",
      wtuk:"8 wtuk",
      kaloriinostkkal: "kkal 257",
      btnB: "-",
      btnC: "+",
      btnD: "dobavit v korzinu"
  },
  {

      img: pic4,
      title:"flesh roll s baklajanom",
      ingredienty:"risovaya bumaga, list salata,baklajan v chesnosom souse, pomidor",
      cena: "550,00 TG",
      wtuk:"5 wtuk",
      kaloriinostkkal: "kkal 235",
      btnB: "-",
      btnC: "+",
      btnD: "dobavit v korzinu"




    }
  ]

  
  return (
    <div className="App">
     {
       data.map((el) => {return <Card el={el}/>
       })
     }
    </div>
  );
}
export  {App}; 