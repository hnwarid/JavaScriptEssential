let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let UserMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated
console.log("Authentication Status:", authenticationStatus);

// Practice task: Dietary services

// let personRole = "Employee";
let personRole = "Enrolled Member";
// let personRole = "Subscriber";
// let personRole = "Non-Subscriber";
// uncomment one & comment the rest to test
let accessMessage;

switch (personRole) {
    case "Enrolled Member":
        accessMessage = "You have access to Dietary Services and 1-on-1 interaction with a dietician.";
        break;
    case "Employee": 
        accessMessage = "You have access to Dietary Services.";
        break;
    case "Subscriber": 
        accessMessage = "You have partial access to Dietary Services."
        break;
    case "Non-Subscriber":
        accessMessage = "You need to enroll or Subscribe first to access this service."
        break;
}

console.log("Person role:", personRole, "\n", "Access Message:", accessMessage);