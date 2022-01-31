import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];


function App() {
  const [cityIndex,setCityIndex] = useState(0);
	const [cityTrue,setCityTrue] = useState(false);

	const [townIndex,setTownIndex] = useState(0);
	const [townTrue,setTownTrue] = useState(false);

	const nestCity = (e) => {
		// console.log(e.target.value);
		setCityIndex(e.target.value)
		setCityTrue(!cityTrue);
	}

	const nestTown = (e) => {
		setTownIndex(e.target.value);
		setTownTrue(!townTrue);
	}

  return( 
      <div id="main">
        <ul onClick={nestCity}>
          {
            states.map((state,i) => {
              return( 
              <div>
              <li type="none" key={i+1} value={i} id={`state${i+1}`}>{state.name}
              
              </li>
              </div>						
              )
            })
          }
        </ul>
        {
          cityTrue
          ?
          <ul onClick={nestTown}>
            {
              states[cityIndex].cities.map((city,i) => {
                return <li type="none" key={i+1} value={i} id={`city${i+1}`}>{city.name}</li>
              })
            }
          </ul>
          :
          ('')
        }
        {
          townTrue
          ?
          states[cityIndex].cities[townIndex].towns.map((town,i) => {
            return <li type="none" key={i+1} value={i} id={`town${i+1}`}>{town.name}</li>
          })
          :
          ('')
        }
        
      </div>
      )
}

export default App;
