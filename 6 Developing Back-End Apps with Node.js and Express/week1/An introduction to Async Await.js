// The below code is done by nesting the second set of promises into the first.

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category. Finally print them all out. We are using axios get, which returns a promise. 
*/
const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about 
each of the category. Finally print them all out. We are using axios get, which returns a promise. 
*/
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data.entries;
      return listOfEntries.map((entry)=>{
          return entry.Category
      })
    }).then((categories)=>{
      let Categories = categories.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
        Categories.forEach((category)=>{
            const req = axios.get("https://api.publicapis.org/entries?Category="+category);
            req.then(resp=>{
                console.log(category+" - "+resp.data.count);
            }).catch(err => {
              
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://api.publicapis.org/entries');