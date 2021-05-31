import axios from 'axios'
// helper function to parse the films result

async function getInfo(address){
    const resp = await axios.get(address)
    return resp
}

// function work but not efficient: too many API calls 
function parseData(data){
    if (Array.isArray(data)){
      data = data.map((item) => {return parseData(item)})
      return data
    }
    else if(typeof(data) === "object"){
      for(const key in data){
        data[key] = parseData(data[key])
      }
      return data
    }
    else if (typeof(data) === "string"){
      if(data.includes("://swapi.dev/api/")){
        //go and get these names or titles
        const essai = getInfo(data)
        essai.then(response => {
            const result = response.data.results || response.data
            const { name, title } = result
            console.log(`this is essaie ${name || title}`)
            return name || title
        })

        const res = axios
        .get(data)
        .then(response => {
            const result = response.data.results || response.data
            const { name, title } = result
            console.log(`this is ${name || title}`)
            return name || title
        })
        .catch( err => {return data})
        return res
      }
      else{
        return data
      }
    }
    else{
      return data
    }
  }


function parseFilms(listOfFilms){
    const toDiscard = ["characters", "planets", "starships", "vehicles", "species", "url", "edited"];
    const results = []
    listOfFilms.forEach((film)=>{
        const result = {}
        Object.keys(film).forEach((property)=>{
            if(!toDiscard.includes(property)){
                result[property] = film[property];
            }
        })
        results.push(result)
    })
    return results
}
export default parseFilms