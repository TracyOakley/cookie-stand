'use strict';

let cityList = document.getElementById('cityContainer');


console.log(cityList);

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

//City Constructor

let City = function(name,min,max,avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesSoldEachHourArray = [];
};

City.prototype.getRandomNumofCustomers = function(){
  return Math.floor(Math.random()* (this.max - this.min +1) + this.min);
};

City.prototype.calcCookiesPurchased = function(){
  for(let i =0;i<hours.length;i++){
    this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    this.dailyTotal += this.cookiesSoldEachHourArray[i];
  }
  this.cookiesSoldEachHourArray[this.cookiesSoldEachHourArray.length] = this.dailyTotal;
};

City.prototype.renderTable = function(){

  let tbody = document.querySelector('tbody');
  let tr = document.createElement('tr');
  tbody.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for(let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHourArray[i];
    tr.appendChild(td);
  }
};

City.prototype.render = function(){
  this.calcCookiesPurchased();
  this.renderTable();
/*
  let label = document.createElement('label');
  label.textContent = this.name;
  cityList.appendChild(label);
  
  let ul = document.createElement('ul');
  ul.id = 'seattleContainer';
  cityList.appendChild(ul);
  
  for(let i = 0; i<hours.length; i++){
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
    ul.appendChild(li);
    
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
  ul.appendChild(li);
  */
};

//Header Stand-alone Function
function createHeader(){
  let thead = document.querySelector('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = "City";
  tr.appendChild(th);

  for(let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = "Daily Location Total";
  tr.appendChild(th);
}




// Creating the Instances
let seattle = new City('Seattle',23,65,6.3);
let tokyo = new City('Tokyo',3,24,1.2);
let dubai = new City('Dubai',11,38,3.7);
let paris = new City('Paris',20,38,2.3);
let lima = new City('Lima',2,16,4.6);

let cityArray = [seattle,tokyo,dubai,paris,lima];

for(let i = 0;i<cityArray.length;i++){
  cityArray[i].render();
}

createHeader();
createFooter();

//Footer Stand-alone Function

function createFooter(){
  let tfoot = document.querySelector('tfoot');
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = "Totals";
  tr.appendChild(td);

  let hourlyTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //this is ugly but it is the only way I can cast them as numbers to add numbers to.

  for(let i = 0; i < cityArray.length; i++){

    for(let j = 0; j < cityArray[i].cookiesSoldEachHourArray.length;j++){
      hourlyTotal[j] += cityArray[i].cookiesSoldEachHourArray[j];
      //console.log(cityArray[i].cookiesSoldEachHourArray[j]);
      //console.log(hourlyTotal[j]);
    }
  }
  
  for(let i = 0; i < hourlyTotal.length; i++){
    let td = document.createElement('td');
    td.textContent = hourlyTotal[i];
    tr.appendChild(td);
  }

}

// Class 09 code for the form and events

let form = document.querySelector('form');


let handleSubmitofNewStore = function(event){
  event.preventDefault();
  console.log(event);
  let cityName = event.target.cityName.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgCookies = parseInt(event.target.avg.value);

  let newStore = new City(cityName,minCust,maxCust,avgCookies);
  
  //remove footer from table, I guess it is like a recursive removal
  let tfoot = document.querySelector('tfoot');
  while (tfoot.hasChildNodes()) {
    tfoot.removeChild(tfoot.firstChild);
  }
  
  //add to the table
  newStore.render();
  
  //add to city array
  cityArray.push(newStore);
  
  //add the new footer
  createFooter();
};

form.addEventListener('submit', handleSubmitofNewStore);

//ALL the CLASS 06 CODE
/*
//SEATTLE

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  
  //Store the results for each location in a separate array… perhaps as a property of the object representing that location.
  cookiesSoldEachHourArray: [],

  getRandomNumofCustomers: function(){
    return Math.floor(Math.random()* (this.max - this.min +1) + this.min); //min & max inclusive
  },
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  calcCookiesPurchased: function(){
    for(let i =0;i<hours.length;i++){
      this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    }
  },
  //Display the values of each array as unordered lists in the browser.

  render: function(){
    let label = document.createElement('label');
    label.textContent = 'Seattle';
    cityList.appendChild(label);

    let ul = document.createElement('ul');
    ul.id = 'seattleContainer';
    cityList.appendChild(ul);

    for(let i = 0; i<hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
    ul.appendChild(li);
  }

};

console.log(seattle.getRandomNumofCustomers());

seattle.calcCookiesPurchased();
console.log(seattle.cookiesSoldEachHourArray);
seattle.render();

//TOKYO



let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],

  getRandomNumofCustomers: function(){
    return Math.floor(Math.random()* (this.max - this.min +1) + this.min); //min & max inclusive
  },

  calcCookiesPurchased: function(){
    for(let i =0;i<hours.length;i++){
      this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    }
  },

  render: function(){
    let label = document.createElement('label');
    label.textContent = 'Tokyo';
    cityList.appendChild(label);

    let ul = document.createElement('ul');
    ul.id = 'tokyoContainer';
    cityList.appendChild(ul);

    for(let i = 0; i<hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
    ul.appendChild(li);
  }

};

tokyo.calcCookiesPurchased();
console.log(tokyo.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0));
tokyo.render();

//DUBAI

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],

  getRandomNumofCustomers: function(){
    return Math.floor(Math.random()* (this.max - this.min +1) + this.min); //min & max inclusive
  },

  calcCookiesPurchased: function(){
    for(let i =0;i<hours.length;i++){
      this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    }
  },

  render: function(){
    let label = document.createElement('label');
    label.textContent = 'Dubai';
    cityList.appendChild(label);

    let ul = document.createElement('ul');
    ul.id = 'dubaiContainer';
    cityList.appendChild(ul);

    for(let i = 0; i<hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
    ul.appendChild(li);
  }

};

dubai.calcCookiesPurchased();
console.log(dubai.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0));
dubai.render();

// PARIS

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],

  getRandomNumofCustomers: function(){
    return Math.floor(Math.random()* (this.max - this.min +1) + this.min); //min & max inclusive
  },

  calcCookiesPurchased: function(){
    for(let i =0;i<hours.length;i++){
      this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    }
  },

  render: function(){
    let label = document.createElement('label');
    label.textContent = 'Paris';
    cityList.appendChild(label);

    let ul = document.createElement('ul');
    ul.id = 'parisContainer';
    cityList.appendChild(ul);

    for(let i = 0; i<hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
    ul.appendChild(li);
  }

};

paris.calcCookiesPurchased();
console.log(paris.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0));
paris.render();

//LIMA

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],

  getRandomNumofCustomers: function(){
    return Math.floor(Math.random()* (this.max - this.min +1) + this.min); //min & max inclusive
  },

  calcCookiesPurchased: function(){
    for(let i =0;i<hours.length;i++){
      this.cookiesSoldEachHourArray[i] = Math.round(this.getRandomNumofCustomers()*this.avg);
    }
  },

  render: function(){
    let label = document.createElement('label');
    label.textContent = 'Lima';
    cityList.appendChild(label);

    let ul = document.createElement('ul');
    ul.id = 'limaContainer';
    cityList.appendChild(ul);

    for(let i = 0; i<hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]}`;
      ul.appendChild(li);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0)}`;
    ul.appendChild(li);
  }

};

lima.calcCookiesPurchased();
console.log(lima.cookiesSoldEachHourArray.reduce((partSum,a)=>partSum+a, 0));
lima.render();
*/
