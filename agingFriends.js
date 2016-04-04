var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";
var newFriends = friends.split(',');


var friendz = [];
newFriends.forEach(function(friends) {
  friendz.push(friends.split('is'));

});

var friend = {};
friendz.forEach(function(friends) {
  var name = (friends[0]);
  var age = Number(friends[1]);
  friend[name] = age;

});
var younger = 20;
var oldest = 0;
var name = "";

for (var friendz in friend) {
  if (friend[friendz] < younger) {
    younger = friend[friendz];
  }

}
if (friend[friendz] === younger) {
  name = friend[friendz];
}

for (var friends in friend) {
  if (friend[friendz] > oldest) {
    oldest = friend[friendz];
  }
}
if (friend[friendz] === oldest) {
  name = friend[friendz];
}
  //  if (friend[friendz] < 'Ellie' ) {
  //    name = (friend[friendz];
  //    }
  //    console.log




console.log("The friend that is younger than Ellie is" + " " + friendz + younger);
console.log("The oldest is" + " " + friends + oldest);
