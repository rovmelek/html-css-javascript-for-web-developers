(function () {
  // change John to john and Jason to json so we can validate the if condition inside the for loop
  var names = ["Yaakov", "john", "Jen", "jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // "var" uses something called ‘hoisting’, which can lead to unexpected results.
  // "let" and "const" are both block-scoped. Which means you can declare them in for loop or if statement,
  // and they will only be valid for that block. This helps with spotting bugs and makes your code more robust.
  for (let i = 0; i < names.length; i++) {
    // use regular expression match is easier and cleaner in this case
    let pattern = /^j/i;
    if (names[i].match(pattern)) {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    };
  };
})();
