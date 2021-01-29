var scenarios = {
  0: ["You cold-called during a math lesson, but your student is playing with his toys. He has a yellow ball, a fire truck, and a stuffed animal. You want to redirect him to the lesson objective: attributes of shapes.", "sides, corners, rectangle, triangle, square, circle."],
  1: ["After exercising, several students say, 'Oh my goodness, that was so hard! I can't breathe!'", "intensity, frequency, duration"],
  2: ["During a music lesson, you play a clip of 'Ode to Joy' played on a violin. You then play the same clip, but this time played on an oboe.", "sound quality, woodwinds, strings"],
  3: ["You're doing a read aloud of the 3 Little Pigs. You pause on a page that shows the pig is hiding from the wolf in a house of sticks.", "straw, sticks, bricks, puff"],
  4: ["You're conducting a science investigation into things that are magnetic. You have students run and grab one object that they think is magnetic.", "steel, iron, nickel, cobalt, magnetic, non-magnetic"],
  5: ["You're targeting rhythmic syllables. Students have had practice clapping syllables to a simple beat. However, one student is off beat and clapping WORDS instead of syllables.", "beat, rhythm, syllables"],
  6: ["You see a student is snacking on celery during a lesson on caloric intake and expenditure.", "calories,expenditure, intake, exercise"],
  7: ["You're conducting a listening activity. You give students instructions, and they have to draw what you say. If they do it correctly, then they will be able to draw a cute valentine's day card!", "between, above, below, circle, rectangle, triangle, oval, corner"],
  8: ["During breakfast, students have cinnamon rolls, juice boxes, and hard-boiled eggs. (yum...)", "between, above, below, circle, rectangle, triangle, oval, corner"],
  9: ["Students start yawning during a stretching exercise. This frustrates you, but you know you can use it to re-engage them...", "frequency, intensity, duration, expenditure, calories"],
  10: ["Students are in a quick brain break. One student tells you, 'Last weekend I ate the 6-entree plate from Panda Express and I felt SOOOO tired.'", "calories, intake, expenditure, intensity, frequency, exercise"],
  11: ["During a brain break, a student is humming a tune (twinkle, twinkle little star).", "rhythm, syllables, beat"],
  12: ["Students are dancing to a Lady Gaga Chromatica Club Remix 'Just Dance' video (very intense). Can you figure out a way how to make an interdisciplinary connection between music and P.E. concepts?", "rhythm, syllables, beat, intensity, duration"],
  13: ["You're reading the story 'Little Red Riding Hood' to students.", "suspect, trust, frightening"],
  14: ["You're about to read a story about a family. You haven't started reading yet; you just want to activate background knowledge.", "members, adventure, hobby"],
  15: ["You want to hook students into a lesson about comparing textures.", "soft, hard, smooth, rough, fuzzy"],
  16: ["You're teaching students how to differentiate colors. Students brought their favorite objects and did a show and tell.", "color, compare, same, different"],
  17: ["Students typed into the chat some of their favorite exercises.", "intensity, frequency, duration, calories, expenditure"],
  18: ["Students typed into the chat their favorite songs.", "woodwinds, strings, percussion, tuba, violin, oboe, cello, instrument family, sound quality"],
  19: ["Students typed into the chat their favorite shape.", "sides, corners, rectangle, triangle, square, circle, oval"],
  20: ["You're giving directions to students. Usually, you say to put a circle around the right answer. Can you think of a way you can substitute your directions to make it a HOT, non-eliciting task?", "sides, corners, rectangle, triangle, square, circle, atttributes"]
}

var genBtn = $(".generate");
var scenarioBox = $(".scenario");
var vocabBox = $(".targetVocab");
var timerBox = $(".timer");

genBtn.on("click", randomAppend);

//1.5-Min Countdown Timer
function countDownTimer() {
  var time = 60;
  var timer = setInterval(decreaseTime, 1000);

  function decreaseTime() {
    if (time < 0) {
      clearInterval(timer);
      timerBox[0].innerHTML = "Time is up!";
    } else {
      timerBox[0].innerHTML = "";
      timerBox.append(time);
      time--
    }
  }
}


function randomAppend() {
  clearAppendContainers(scenarioBox, vocabBox);

  var keysArray = Object.keys(scenarios);
  var randScenario = scenarios[keysArray[randomNum(keysArray.length - 1)]];

  scenarioBox.append(randScenario[0]);
  vocabBox.append(randScenario[1]);
  countDownTimer();
}

function clearAppendContainers(cont1, cont2) {
  cont1[0].innerHTML = "";
  cont2[0].innerHTML = "";
}

function randomNum(max) {
  //returns random integer from 0 to max
  var randNum = Math.random();
  randNum = randNum * max;
  randNum = Math.round(randNum);
  return randNum
}