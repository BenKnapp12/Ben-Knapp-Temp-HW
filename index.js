// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
    return (f - 32 ) * (5 / 9);
  }
  
  /**
   * | Temperature | Description |
   * | ----------- | ----------- |
   * | < 32        | "very cold" |
   * | < 64        | "cold"      |
   * | < 86        | "warm"      |
   * | < 100       | "hot"       |
   * | >= 100      | "very hot"  |
   *
   * @param {number} f temperature in °F
   * @returns {string} the description from the table above corresponding to
   * the given Fahrenheit temperature `f`
   */

  function describeTemperature(f)
   {
    if (f < 32){
     return "very cold";
    }else if (f < 64 ){
      return "cold";
    }else if ( f < 86 ){
      return "warm";
    }else if ( f < 100 ){
      return "hot";
    }else if ( f >= 100 ){
      return "very hot";
  }

}
  
  /**
    @param {number} limit
    @returns {number} a random integer in the range [0, `limit`)
   */
 
    // TODO
    function getRandomInt(limit){
      return Math.floor(Math .random() * limit);

    }
    const RandomNumber = getRandomInt(900)
    console.log(RandomNumber);
  
  
  // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
  /**
   * Converts the given temperature from Fahrenheit to Celsius,
   * then alerts the user with a descriptive message.
   * @param {number} f temperature in °F
   */
  function parseFahrenheit(f) {
    const c = convertToCelsius(f);
    const description = describeTemperature(f);
    const message = `${f}°F is ${c}°C. That is ${description}.`;
    alert(message);
  }
  
  const fahrenheitPrompt =
    "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
  let f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try that again.");
  f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try some random temperatures.");
  f = getRandomInt(110);
  parseFahrenheit(f);
  
  f = getRandomInt(110);
  parseFahrenheit(f);