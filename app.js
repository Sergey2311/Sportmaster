console.log('worked');

const prevPurchases = 19000;
const currentPurchase = 4000;

let bonusesPerOneThousand;
if (prevPurchases <= 15000) {
    bonusesPerOneThousand = 50;
} else {
    if (prevPurchases <= 150000) {
        bonusesPerOneThousand = 70;
    } else {
        bonusesPerOneThousand = 100; 
    }
}

console.log(bonusesPerOneThousand);