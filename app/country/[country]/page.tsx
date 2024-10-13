


// Dynamic route
// we can create dynamic route simply with the square brackets [country_name]

import { log } from "console";

//
export default function Countries({params}:{params:[country:string]}){
    type Country = {
        name: string,
        population: string,
        capital: string,
        language: string
    };
    
    let country : Country[] = [
        {name:"Pakistan",population:"235.8 million",capital:"Islamabad" ,language:"Urdu"},
        {name :"India",population:"1.417 billion",capital:"New Delhi" , language:"Hindi"  },
        {name:"China",population:"1.412 billion" ,capital:"Beiging" , language:"Mandarin"},
        {name:"Russia",population:"144.2 million" ,capital:"Moscow" , language:"Russian"},
        {name:"Japan",population:"125.1 million",capital:"Tokyo" , language:"Japanese"},
    ]

   let countryData = (country.find(book => book.name.toLowerCase() === params.country))

   
    return(
        <div className="p-1 m-1">
            <p className="flex justify-center text-xl m-2">"{countryData?.name}"</p>
            <p>Country name: {countryData?.name}</p>
            <p>Population: {countryData.population}</p>
            <p>Capital: {countryData.capital}</p>
            <p>National Language: {countryData.language}</p>
            
            

        </div>
    )

}



