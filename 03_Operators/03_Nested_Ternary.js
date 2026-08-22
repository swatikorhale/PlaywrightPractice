let temp=35;

let feel=(temp>40)? "Very Hot" :
        (temp>30) ? "Hot" :
        (temp>20) ? "Warn" :
        (temp>10) ? "cool":"Cold";

console.log(`"Tempretarature:" ${temp}, "feel:" ${feel}`);