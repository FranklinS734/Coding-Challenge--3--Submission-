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

// Task 3 -  Employee Performance Tracking Scenario:

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

// Task 4 -Customer Feedback Records 

// Declaring an array "feedback" with three customer feedback objects
let feedback = [
    { customerName: "Dia Son", feedbackText: "Great product!", rating: 5 },
    { customerName: "Neil Jia", feedbackText: "Quality is okay and a bit pricey.", rating: 2 },
    { customerName: "Adam Fessler", feedbackText: "Fast shipping and great product.", rating: 5 }
];

// Add a new feedback object
feedback.push({ customerName: "Raymond Keen", feedbackText: "Well designed product", rating: 5 });

// Log the entire feedback list
console.log("Customer Feedback:", feedback);

// Task 5 - Inventory Management System Scenario (supplements)

// Declare an object "inventory" with product details
let inventory = {
    itemName: "Godzilla Pre-Workout",
    stockCount: 500,
    price: 55.99,
    
    // Calculate total value of stock on hand
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

// Log inventory details and total stock value
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());