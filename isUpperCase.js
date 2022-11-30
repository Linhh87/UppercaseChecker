function isFirstLetterUpperCase(String) {
   regexp = /^[A-Z]/;
   if (regexp.test(String)) {
     console.log(String + "'s first character is uppercase");
   } else {
     console.log(String + "'s first character is not uppercase");
   }
}
isFirstLetterUpperCase("Abcd")
isFirstLetterUpperCase('abcd')