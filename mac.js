//MEMORY
function updateMemoryCost(isdecreasing) {
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    const totalExtraMemoryCost = parseInt(extraMemoryCost);
    if (isdecreasing == true) {
        extraMemory.innerText = 0;
    }
    else {
        extraMemory.innerText = 180;
    }

}

const eightGiga = document.getElementById('eight-giga');
eightGiga.addEventListener('click', function () {
    updateMemoryCost(true);
    priceTotal();
    totalSum();
})
const sixteenGiga = document.getElementById('sixteen-giga');
sixteenGiga.addEventListener('click', function () {
    updateMemoryCost(false);
    priceTotal();
    totalSum();
})

//STORAGE
function updateStorageCost(decreasingStorage) {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
    const totalExtraStorageCost = parseInt(extraStorageCost);
    if (decreasingStorage == true) {
        extraStorage.innerText = 0;
    }
    else if (decreasingStorage == false) {
        extraStorage.innerText = 100;
    }
    else {
        extraStorage.innerText = 180;
    }
}
const firstStorage = document.getElementById('first-storage');
firstStorage.addEventListener('click', function () {
    updateStorageCost(true);
    priceTotal();
    totalSum();
})
const secondStorage = document.getElementById('second-storage');
secondStorage.addEventListener('click', function () {
    updateStorageCost(false);
    priceTotal();
    totalSum();
})
const thirdStorage = document.getElementById('third-storage');
thirdStorage.addEventListener('click', function () {
    updateStorageCost('Nor True Nor False');
    priceTotal();
    totalSum();
})

//CHOOSE YOUR DELIVERY OPTION
function deliveryCost(decreaseDeliveryCost) {
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryCharge.innerText;
    const totalDeliveryChargeCost = parseInt(deliveryChargeCost);
    if (decreaseDeliveryCost == true) {
        deliveryCharge.innerText = 0;
    }
    else {
        deliveryCharge.innerText = 20;
    }
}
const noDelivery = document.getElementById('no-delivery');
noDelivery.addEventListener('click', function () {
    deliveryCost(true);
    priceTotal();
    totalSum();
})
const Delivery = document.getElementById('delivery');
Delivery.addEventListener('click', function () {
    deliveryCost(false);
    priceTotal();
    totalSum();
})

//Total Price
function priceTotal() {
    const bestPrice = document.getElementById('best-price');
    const bestPricing = bestPrice.innerText;
    const totalbestPricing = parseInt(bestPricing);

    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    const totalExtraMemoryCost = parseInt(extraMemoryCost);

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
    const totalExtraStorageCost = parseInt(extraStorageCost);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryCharge.innerText;
    const totalDeliveryChargeCost = parseInt(deliveryChargeCost);

    const totalPrice = totalbestPricing + totalExtraMemoryCost + totalExtraStorageCost + totalDeliveryChargeCost;
    document.getElementById('total-price').innerText = totalPrice;

}
//Last Total Price(Bonus Part 01)
function totalSum() {
    const lastTotalUpdate = document.getElementById('last-total-update')
    const lastTotalValue = lastTotalUpdate.innerText;
    const lastTotalValueUpdate = parseInt(lastTotalValue);

    const bestPrice = document.getElementById('best-price');
    const bestPricing = bestPrice.innerText;
    const totalbestPricing = parseInt(bestPricing);

    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    const totalExtraMemoryCost = parseInt(extraMemoryCost);

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
    const totalExtraStorageCost = parseInt(extraStorageCost);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryCharge.innerText;
    const totalDeliveryChargeCost = parseInt(deliveryChargeCost);

    const lastTotalSum = totalbestPricing + totalExtraMemoryCost + totalExtraStorageCost + totalDeliveryChargeCost;
    document.getElementById('last-total-update').innerText = lastTotalSum;
}

//    Promo Code (Bonus Part 02)


       const applyButton=document.getElementById('apply-button');
       applyButton.addEventListener('click',function(){

           const promoCode=document.getElementById('promo')
           const promoCodeNew=promoCode.value;
        //    console.log(promoCodeNew)
           let promoCodeText='stevekaku';


       if(promoCodeNew==promoCodeText){
        //    console.log('hello')
        const lastTotalUpdate = document.getElementById('last-total-update')
        const lastTotalValue = lastTotalUpdate.innerText;
        const lastTotalValueUpdate = parseInt(lastTotalValue);
        const lastTotalUpdatePrice=lastTotalValueUpdate*0.2;
        lastTotalUpdate.innerText=lastTotalUpdatePrice;
        promoCode.value='';
       }
       else{
           alert('Please Type Valid Promo Code')
       }
    })
