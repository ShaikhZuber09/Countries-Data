const mycard = document.getElementById("mycard")
const counrtyCard = (arr) => {
    let result = ""
    arr.forEach(ele => {
        result += `<div class="col-sm-4 col-md-3 mt-4">
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
    mycard.innerHTML = result
}
counrtyCard(countries)
const search = document.getElementById("searhcounrty")
const onCountrySearch = (eve) => {
    let searchvalue = eve.target.value.toLowerCase();
    let newArr = countries.filter(ele => ele.name.toLowerCase().includes(searchvalue) || ele.capital.toLowerCase().includes(searchvalue) || ele.languages.join().toLowerCase().includes(searchvalue)
    )
    counrtyCard(newArr)
}
search.addEventListener("keyup", onCountrySearch)

const nameSort=document.getElementById("nameSort")
const popSort=document.getElementById("popSort")
const capSort=document.getElementById("capSort")
let flag = true;
const onNameSort=(eve)=>{
    let sortArr=countries.sort((a,b)=>{
        let p=a.name.toLowerCase();
        let q=b.name.toLowerCase()
        if(p>q){
            return 1
        }else if(p<q){
            return -1
        }else{
            return 0
        }
    }
    )
    if(flag == true){
        counrtyCard(sortArr)
        flag=false;
    }else{
        counrtyCard(sortArr.reverse())
        flag=true
    }
}
const onCapSort=(eve)=>{
    let sortArr=countries.sort((a,b)=>{
        let p=a.capital.toLowerCase();
        let q=b.capital.toLowerCase()
        if(p>q){
            return 1
        }else if(p<q){
            return -1
        }else{
            return 0
        }
    }
    )
    if(flag == true){
        counrtyCard(sortArr)
        flag=false;
    }else{
        counrtyCard(sortArr.reverse())
        flag=true
    }
}
const onPopSort=(eve)=>{
    let sortArr=countries.sort((a,b)=>{
        let p=a.population;
        let q=b.population
        if(p>q){
            return 1
        }else if(p<q){
            return -1
        }else{
            return 0
        }
    }
    )
    if(flag == true){
        counrtyCard(sortArr)
       
        flag=false;
    }else{
        counrtyCard(sortArr.reverse())
        flag=true
    }
}

nameSort.addEventListener("click",onNameSort)

capSort.addEventListener("click",onCapSort)
popSort.addEventListener("click",onPopSort)