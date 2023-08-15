// Async-await
const axios = require('axios').default;
let url = "some remote url"
async function asyncCall() {
  console.log('calling');
  const result = await axios.get(url);
  console.log(result.data);
}
asyncCall();

// Callback
//function(res) and function(err) are the anonymous callback functions
axios.get(url).then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err)
})

// Promise
axios.get(url).then(
    //do something
    ).catch(
    //do something
    ) 

// Promise use case
let prompt = require('prompt-sync')();
let fs = require('fs');
const methCall = new Promise((resolve,reject)=>{
    let filename = prompt('What is the name of the file ?');
    try {
      const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
      resolve(data);
    } catch(err) {
      reject(err)
    }
});
console.log(methCall);
methCall.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file")
);

// object.on()
http.request( options, function(response) {
    let buffer = '';
    // ...
    response.on('data', function(chunk) {
      buffer += chunk;
    });
    response.on('end', function() {
      console.log(buffer);
    });
   }).end();
    s   


// Callback Hell/The Pyramid of Doom    

const makeCake = nextStep => {
    buyIngredients(function(shoppingList) {
      combineIngredients(bowl, mixer, function(ingredients){
        bakeCake(oven, pan, function(batter) {
          decorate(icing, function(cake) {
            nextStep(cake);
          });
        });
      });
    });
  };

//   Axios Request

const axios = require('axios').default;
const connectToURL=(url)=>{
  const req=axios.get(url);
  console.log(req);
  req.then(resp=>{
  console.log("Fulfilled");
  console.log(resp.data);
  })
  .catch(err=>{
  console.log("Rejected");
  });
}
connectToURL('valid-url')
connectToURL('invalid-url')
