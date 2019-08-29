(function () {
  // change John to john and Jason to json so we can validate the if condition inside the for loop
  var names = ["Yaakov", "john", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    // use regular expression match is easier and cleaner in this case
    let pattern = /^j/i;
    if (names[i].match(pattern)) {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  ;}
})();