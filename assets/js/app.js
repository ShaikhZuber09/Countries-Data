const mycard=document.getElementById("mycard")
let result=""
countries.forEach(ele=>{
    result +=`<div class="col-sm-4 col-md-3 mt-4">
                  <div class="thumbnail countrycard">
                      <figure> 
                           <img src="${ele.flag}" alt="country">
                      </figure>
                      <div class="caption">
                          <h3> ${ele.name}</h3>
                          <p>Capital : <span>${ele.capital}</span></p>
                          <p>Languages : <span>${ele.languages}</p>
                          <p>Population : <span>${ele.population}</span></p>
                      </div>
                  </div>
              </div> `
})
mycard.innerHTML=result
