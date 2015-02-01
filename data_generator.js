/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {}; //all data
streams.home = []; //all tweets of all users
streams.users = {};
streams.users.shawndrost = []; //tweets for user shawndrost
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users); //collection of users (and their tweets)

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user; //get user data from the tweet
  streams.users[username].push(newTweet); //add tweet to the user's tweets
  streams.home.push(newTweet); //add tweet to all tweets
};

// utility function to return a random element from an array 
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man',"i can't believe i", 'today at starbucks i', 'my cat', 'my brother'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw', 'jumped over', 'annihilated', 'defeated', 'want'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of', 'all', 'a giant', 'a lucky'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind', 'bee', 'BEES', 'bluebird', 'the beast'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '#BEES', '#why', '#aintthatjusttheway', '', '', '', ''];


//function to create a random tweet message
var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date(); //timestamp!!
  addTweet(tweet);
};


//creates the initial ten tweets
for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

//this creates a constant stream of tweets
var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};
