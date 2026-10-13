const { act } = require("react");

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


function getTotalSalesBySeller3(sales) {
    let totalSalesBySeller = sales.reduce((accumulator, sale) => {
        if (!accumulator[sale.seller]) {
            accumulator[sale.seller] = 0;
        }
        accumulator[sale.seller] = accumulator[sale.seller] + sale.amount;
        return accumulator;
    }, {});
    return totalSalesBySeller;
}

function getTotalSales(sales) {
    let totalSales = 0;
    for (let i = 0; i < sales.length; i++) {
        totalSales = totalSales + sales[i].amount;
    }
    return totalSales;
}

function getAverageSales(totalSales, sales) {
    return totalSales / sales.length;
}

function getTopSeller2(sales) {
    let topSellerAmount = 0;
    let topSeller = "name";
    let totalSalesBySeller = getTotalSalesBySeller3(sales);
    for (let seller in totalSalesBySeller) {
        if (totalSalesBySeller[seller] > topSellerAmount) {
            topSellerAmount = totalSalesBySeller[seller];
            topSeller = seller;
        }
    }
    return topSeller;
}

function getSalesReport(sales) {
    let totalSales = getTotalSales(sales);
    let averageSales = getAverageSales(totalSales, sales);
    let topSeller = getTopSeller2(sales);
    return {
        totalSales: totalSales,
        averageSales: averageSales,
        topSeller: topSeller,
    }
}

function main3() {
    let sales = [
        { seller: "John", amount: 1200 },
        { seller: "Mary", amount: 800 },
        { seller: "John", amount: 500 },
        { seller: "Peter", amount: 1500 },
        { seller: "Mary", amount: 700 }
    ];
    let salesReport = getSalesReport(sales);
    console.log(salesReport);
}

main3();