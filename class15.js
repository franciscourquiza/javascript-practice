function getTotalSalesBySeller(sales) {
    let totalSalesBySeller = sales.reduce((accumulator, sale) => {
        if (!accumulator[sale.seller]) {
            accumulator[sale.seller] = 0;
        }
        accumulator[sale.seller] = accumulator[sale.seller] + sale.amount;
        return accumulator;
    }, {});
    return totalSalesBySeller;
}

function main() {
    let sales = [
        { seller: "John", amount: 1200 },
        { seller: "Mary", amount: 800 },
        { seller: "John", amount: 500 },
        { seller: "Peter", amount: 1500 },
        { seller: "Mary", amount: 700 },
    ];
    let totalSalesBySeller = getTotalSalesBySeller(sales);
    return console.log(totalSalesBySeller);
}

main();


function getTotalSalesBySeller2(sales) {
    let totalSalesBySeller = sales.reduce((accumulator, sale) => {
        if (!accumulator[sale.seller]) {
            accumulator[sale.seller] = 0;
        }
        accumulator[sale.seller] = accumulator[sale.seller] + sale.amount;
        return accumulator;
    }, {});
    return totalSalesBySeller;
}

function getTopSeller(totalSalesBySeller) {
    let topSellerAmount = 0;
    let topSellerName = "name";
    for (let seller in totalSalesBySeller) {
        if (totalSalesBySeller[seller] > topSellerAmount) {
            topSellerAmount = totalSalesBySeller[seller];
            topSellerName = seller;
        }
    }
    let topSeller = {
        [topSellerName]: topSellerAmount
    }
    return topSeller;
}

function main2() {
    let sales = [
        { seller: "John", amount: 1200 },
        { seller: "Mary", amount: 800 },
        { seller: "John", amount: 500 },
        { seller: "Peter", amount: 1500 },
        { seller: "Mary", amount: 700 },
    ];
    let totalSalesBySeller = getTotalSalesBySeller2(sales);
    let topSeller = getTopSeller(totalSalesBySeller);
    return console.log(topSeller);
}

main2();

