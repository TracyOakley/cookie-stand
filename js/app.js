'use strict';

let cityList = document.getElementById('cityContainer');


console.log(cityList);

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm.','1 pm.','2 pm.','3 pm.','4 pm.','5 pm.','6 pm.','7 pm.'];

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
