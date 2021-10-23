/* jshint node: true */
"use strict";
//URL https://webapi-cupo-user-api-main-qx3ff.ondigitalocean.app/user/bnc_pair_tickers/?uuid_1=98b96b5b82a04022&asset_1=BTC


let loadJSON = fetch('js/current.json',
{
  credentials: 'same-origin',
  headers:{'Access-Control-Allow-Origin':'webapi-cupo-user-api-main-qx3ff.ondigitalocean.app'}   
});

loadJSON.then(response => response.json())
.then(data => data.bnc_pair_tickers)
.then(items =>{
    items.map(item => {console.log(item);
        let cont = document.createElement('div');
        cont.className = "str";
    
        let cell1 = document.createElement('div');
        cell1.className ="item1-container";
        cell1.innerHTML = '<img src="icons/btc.png"/>';
    
        const ticker = 'BTC';
    
        const formedName = ticker + item.replace(ticker, '/');
    
    
        let cell2 = document.createElement('div');
        cell2.className = "item2-container";
        cell2.innerHTML = formedName;
    
        let cell3 = document.createElement('div');
        cell3.className = "cell3-container";
    
        let cell4 = document.createElement('div');
        cell4.className = "cell4-container";
        cell4.id = "perc";
    
        header.after(cont);
        cont.prepend(cell1);
        cell1.after(cell2);
        cell2.after(cell3);
        cell3.after(cell4);
    
        let Num1 = getRandomFloat(100, 200),
            Num2 = getRandomFloat(-20, 20);  
    
    cell3.prepend(Num1);
    cell4.prepend(Num2, '%');
    
    if(Num2 > 0){
        document.getElementById("perc").style.color = "#3CB371";
    }
    
    cont.mouseover = function(){
        cont.style.opacity='0.5';
    }
    })
    });

 function getRandomFloat(min, max) {
    let x = (Math.random() * (max - min) + min);
    return parseInt(x* 100)/100;
      }
