const scheduledDay = (days) => {
    days.forEach((day) => {
        switch (day) {
            case "Monday":
                console.log(`On ${day}, standard delivery is scheduled`);
                break;
            case "Tuesday":
                console.log(`On ${day}, local delivery is scheduled`);
                break;
            case "Wednesday":
                console.log(`On ${day}, priority delivery is scheduled`);
                break;
            case "Thursday":
                console.log(`On ${day}, standard delivery is scheduled`);
                break;
            case "Friday":
                console.log(`On ${day}, standard delivery is scheduled`);
                break;
            case "Saturday":
            case "Sunday":
                console.log(`No deliveries scheduled on ${day}`);
                break;
            default:
                console.log(`Unknown day: ${day}`);
                break;
        }
    })
}
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
scheduledDay(days);

const bookStatuses = (books) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i] > 0) {
            console.log("Ready to lend");
        } else {
            console.log("Checked out");
        }
    }
};
const books = [2,3,0,1,6,0,1,1,0,4];
bookStatuses(books);

const customerAges = (ages) => {
    for (let i=0; i<ages.length; i++){
        if (ages[i]>18) {
            console.log("Adult")
        }else {
            console.log("Minor")
        }

    }
}
const ages = [2,21,18,54,17,40,15,5];
customerAges(ages);

const gameCountdown = (lives) => {
    let fullLives = 5;
    while (fullLives>= lives){ 
        console.log(`You have ${fullLives} left`)
        fullLives--;
    }
}
gameCountdown(0)

  
 const processFeedback = (feedback) =>{
    let i = 0;
    do {
      if (feedback.length > 0) {
        console.log(`Feedback: ${feedback.shift()}`);
      }
    } while (feedback.length > 0);
    console.log("All feedback processed.");
  }
  
  const userFeedback = ["Nice work", "Needs improvement", "Keep it up!"];
  processFeedback(userFeedback.slice());

  const checkLoginStatus = (loginStatuses) =>{
    for (const status of loginStatuses) {
      if (status === "logged in") {
        console.log("Welcome back!");
      } else {
        console.log("Please log in");
      }
    }
  }
  
  const loginStatuses = ["logged in", "logged out", "logged in"];
  checkLoginStatus(loginStatuses);

  const processTicketPriority = (priorities) => {
    for (const priority of priorities) {
      switch (priority) {
        case "low":
          console.log("Address within 3-5 business days.");
          break;
        case "medium":
          console.log("Address within 1-2 business days.");
          break;
        case "high":
          console.log("Address immediately.");
          break;
        default:
          console.log(`Unknown priority: ${priority}`);
      }
    }
  }
  
  const ticketPriorities = ["high", "low", "medium", "critical"];
  processTicketPriority(ticketPriorities);

  const quizCountdown = () => {
    let timeLeft = 10;
    while (timeLeft >= 0) {
      console.log(`${timeLeft} seconds remaining`);
      timeLeft--;
    }
    console.log("Time's up!");
  }
  
  quizCountdown();
  
  
  
  
  