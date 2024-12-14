const messageOfTheDay = {
  day : ['Monday', 'Tuesday', 'Wedensday', "Thursday","Friday", "Saturday", 'Sunday'],
  timeOfTheDay : ['From 9 to 5', "After work"],
  activity : ['Working', 'Play Some football', "Play VideoGames", "Play Tennis", 'Go on a walk', 'Have a nap'],
  company : ['Alone', 'With friends'],

  generateRandomDay(){
    let randomDayNumber = Math.floor(Math.random() * 7);
    return this.day[randomDayNumber];
  },

  generateRandomTimeOfDay(){
    let randomTimeOfDayNumber = Math.floor(Math.random() * 2);
    console.log(randomTimeOfDayNumber);
    return this.timeOfTheDay[randomTimeOfDayNumber]; 
  },
  
  generateRandomActivity(){
    let randomActivityNumber = Math.floor((Math.random() * 5)+1);
    return this.activity[randomActivityNumber];
  },

  generateRandomCompany(){
    let randomCompanyNumber = Math.floor(Math.random()* 2);
    return this.company[randomCompanyNumber];
  }
}

function generateMessageOfTheDay(message){
    let today = message.generateRandomDay();
    switch(today){
      case "Monday" :
      case "Tuesday" :
      case "Wedensday" :
      case "Thursday" :
      case "Friday" :
        switch (message.generateRandomTimeOfDay()){
          case "From 9 to 5":
            console.log(`Today is ${today}, You should be ${message.activity[0]}, Maybe you can have some fun after your shift.`);
            break;
          case "After work":
            console.log(`Shift Finally Ended, now you can ${message.generateRandomActivity()} till next day :D, You can do it ${message.generateRandomCompany()}`);
            break;
        }
        break;
      case "Saturday":
      case "Sunday":
        console.log(`${today}!, Weekend Atlast, Now you can ${message.generateRandomActivity()} all day if you want :D, You can do it alone or with friends`);
        break;
      default:
        console.log("HMMMM, you are not a human ,are you?");
    }
};

generateMessageOfTheDay(messageOfTheDay);