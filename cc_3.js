// Task 1 -  Product Price Management Scenario

// Declare an array "prices" with at least five numerical values
let prices = [30.99, 40.50, 25.00, 61.75, 52.00];

// Adding a new price to the array (new gym membership price)
prices.push(45.99);

// Removing the first price from the array
prices.shift();

// Step 4: Log the updated price list
console.log("Updated Gym Membership Prices:", prices);

// Task 2 - Modifying Customer Orders Scenario

// Declaring an array "orders" that represent creatine quantity ordered
let orders = [5, 10, 15, 20, 25];

// Increase the third order quantity by 5
orders[2] += 5;

// Calculating the total number of all orders
let totalOrders = orders.reduce((total, qty) => total + qty, 0);

// Step 4: Log the updated order quantities and total order count
console.log("Updated Creatine Orders:", orders);
console.log("Total Creatine Ordered:", totalOrders);

// Task 3 - Tracking Sunny Man's Performance

// Declaring an object "employee" with performance details, listed is the profile
let employee = {
    name: "Sunny Man",
    role: "Data Analyst",
    performanceScore: 2,
    isActive: true
};

// Update the performanceScore
employee.performanceScore = 3;

// Adding a new property "promotionEligible"
employee.promotionEligible = employee.performanceScore >= 3;

// Log the updated employee object
console.log("Updated Employee Performance:", employee);