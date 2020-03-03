module.exports = function check(str, bracketsConfig) {

  let newbracketsConfig = [], check_string = str;

  for (let i = 0; i < bracketsConfig.length; i++) {
    newbracketsConfig.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < newbracketsConfig.length; j++) {
      check_string = check_string.replace(newbracketsConfig[j], "");
    }
    if (check_string.length == 0) {
      return true;
    }
  }

  return false;
}