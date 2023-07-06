Class uber{

    constructor(time,rate,distance,waitingperiod) {
        this.time = time;
        this.rate =rate;
        this.distance = distance;
        this.waitingperiod = waitingperiod
    }
    setDistance(dist){
        this.distance = dist;
    
    }
    getRideDetails(){
        console.log("The Rate of ride is"+this.rate +" and distance");
        return ( 'The rate of ride is ${this.rate} and distance ${this.distance} with waitingperiod $ {this.waitingperiod}')
    
    }
    getprice(){
        let totalprice =(this.rate*this.distance) + (this.waitingperiod*5);
        return totalprice;
        
    }
    
}
let uber1 = new uber(13,45,20,12);
console.log(uber1.getprice());
uber1.setDistance(27);
console.log(uber1.getprice());
