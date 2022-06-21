
//1.creating XHR OBJECT
var request = new XMLHttpRequest();
//2.OPENNING A CONNECTION
request.open('GET', 'https://restcountries.com/v3.1/all',true);
//3.sending a request
request.send();
//4.Receiving a response via onload
request.onload = function(){ 
    if(request.status == 200){
        var data = JSON.parse (request.responseText);
        //response string
        console.log(data);
        //DATA IS FORM OF ARRAY OF OBJECT
        //NAME & CAPITAL
        for(let i=0;i<data.length;i++){
            console.log(data[i].name+"=>"+data[i].capital);

        }

    }
}













   