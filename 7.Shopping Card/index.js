function palirdrome(text) {
  let reversedText = text.split("").reverse().join("");

  if (text === reversedText) {
    console.log(true);
  } else {
    console.log(false);
  }
}
palirdrome("ana");
