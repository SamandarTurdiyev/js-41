

const row =document.querySelector('.row')

fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) =>  {
             data.sort((a,b) =>{

                if (a.name.common < b.name.common) {
                    return -1
               } else if (a.name.common > b.name.common){
                    return 1
               } else{
                    return 0
               }
            })
                 

    const countryAbout =  data.map((country) =>{

        const populationInString = String(country.population);
        let totalPopulation =[];
        if (populationInString.length <= 6) {
            totalPopulation = `${populationInString.slice(0,populationInString.length-3)}k`
            // console.log(totalPopulation)
        }else if (populationInString.length > 6 && populationInString.length <= 9) {
            totalPopulation = `${populationInString.slice(0,populationInString.length-6)}m`
        } else if (populationInString.length > 9 && populationInString.length <=12) {
            totalPopulation = `${populationInString.slice(0,populationInString.length-9)}b`
            console.log(totalPopulation);

        }
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 ">
        <div class="card">
            <img src="${country.flags.png}" class="card-img-top img" alt="${country.flags.alt}">
            <div class="card-body">
              <h4 class="card-title">${country.name.common}</h4>
              <h5 class="card-text">Capital : ${country.capital}</h5>
              <p class="card-num">population : ${totalPopulation}</p>
            </div>
          </div>
    </div>
        `
        
    
    })
    row.innerHTML=countryAbout.join('')
    
}).catch((error) => console.log(error.message))