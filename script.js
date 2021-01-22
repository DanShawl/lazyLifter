'use strict';

const fbBtn = document.getElementById('fb');
const ubBtn = document.getElementById('ub');
const lbBtn = document.getElementById('lb');
const pushBtn = document.getElementById('push');
const pullBtn = document.getElementById('pull');

const header = document.querySelector('header');
const workouts = document.querySelector('.workouts');
const workoutPage = document.querySelector('.workout-page');
const exercisesToTry = document.querySelector('.exercises-to-try');
const yourWorkoutPage = document.querySelector('.your-workout-page');
const yourWorkout = document.querySelector('.your-workout');

// let exercises = [];
// let exercise = [];

//  1. Push name, sets, and reps into a new array for each exercise
//  2. Push this new array into an object? maybe not needed

//  create exercises for each muscle group to add proper super sets
//  need if statements for filtering each item

//  maybe create a loading animation with "Creating Workout...".
let hamstringExercises = [
  'Kettlebell Swings',
  'Romanian Deadlift',
  'Single Leg RDL',
  'Hamstring Curl',
];

let legExercises = [
  'Back Squat',
  'Front Squat',
  'Deadlift',
  'Forward Lunge',
  'Reverse Lunge',
  'Hamstring Curl',
  'Leg Extension',
  'Romanian Deadlift',
  'Single Leg RDL',
  'Split Squat',
  'Leg Press',
  'Kettlebell Swings',
  'Goblet Squat',
];

let chestExercises = [
  'Barbell Bench Press',
  'Dumbbell Bench Press',
  'Push Ups',
  'Incline Barbell Bench Press',
  'Incline Dumbbell Bench Press',
  'Chest Press Machine',
  'Cable Crossover',
  'Low-Cable Crossover',
  'Dumbbell Fly',
  'Incline Dumbbell Fly',
  'Landmine Press',
  'Floor Press',
  'Crush Grip Press',
  'Close-Grip Push Up',
  'Plyo Push Up',
  'Wide-Grip Push Up',
  'Wide-Grip Dips',
];

let backExercises = [
  'Lat Pulldown',
  'Pull Up',
  'Bent-Over Row',
  'Single Arm Row',
  'Band Pull Apart',
  'TRX Row',
  'Reverse Fly',
  'Chin Up',
  'Inverted Row',
  'Landmine Single Arm Row',
  'Low Cable Row',
  'Back Extension',
  'Seated Cable Row',
  'Bent-Over Reverse Fly',
  'Yates Row',
  'Pendlay Row',
  'Cable Face Pulls',
];

let shoulderExercises = [
  'Overhead Shoulder Press',
  'Unsupported Shoulder Press',
  'Arnold Press',
  'Lateral Raise',
  'Forward Raise',
  'High Pull',
  'Shrugs',
  'Push Press',
  'Band Lateral Raise',
  'Band Forward Raise',
  'Pike Press',
  'Y-Raise',
];

let bicepExercises = [
  'Dumbbell Curl',
  'Barbell Curl',
  'Hammer Curl',
  'Concentration Curl',
  'Preacher Curl',
  'Band Curl',
  'Pronated Grip Curl',
  'Crush Grip Curl',
  'Zottman Curl',
  'Cable Curl',
];

let tricepExercises = [
  'Cable Tricep Pushdown',
  'Tricep Dips',
  'Diamond Push Ups',
  'Overhead Tricep Extension',
  'Skull Crusher',
  'Band Pushdown',
  'Tate Press',
  'Kickbacks',
];

let upperExercises = [
  chestExercises[randomIndexGen(chestExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  bicepExercises[randomIndexGen(bicepExercises.length)],
  tricepExercises[randomIndexGen(tricepExercises.length)],
];

let fullBodyExercises = [
  legExercises[randomIndexGen(legExercises.length)],
  legExercises[randomIndexGen(legExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  bicepExercises[randomIndexGen(bicepExercises.length)],
  tricepExercises[randomIndexGen(tricepExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
];

let pushExercises = [
  chestExercises[randomIndexGen(chestExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  chestExercises[randomIndexGen(chestExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  shoulderExercises[randomIndexGen(shoulderExercises.length)],
  tricepExercises[randomIndexGen(tricepExercises.length)],
  tricepExercises[randomIndexGen(tricepExercises.length)],
];

let pullExercises = [
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  backExercises[randomIndexGen(backExercises.length)],
  bicepExercises[randomIndexGen(bicepExercises.length)],
  bicepExercises[randomIndexGen(bicepExercises.length)],
  bicepExercises[randomIndexGen(bicepExercises.length)],
];

/* ********** Creates and appends workout cards ********** */
function createWorkoutCard(workoutfocus, workoutintensity, workoutClass) {
  let workoutCard = document.createElement('div');
  let workoutCardFocus = document.createElement('h4');
  let workoutCardIntensity = document.createElement('p');
  let overlay = document.createElement('div');
  let wcInfo = document.createElement('div');
  let wcDate = document.createElement('p');
  let d = new Date();

  workoutCardFocus.textContent = workoutfocus;
  workoutCardIntensity.textContent = workoutintensity;
  wcDate.innerHTML = `Created: ${
    d.getMonth() + 1
  }.${d.getDate()}.${d.getFullYear()}`;

  workouts.appendChild(workoutCard);
  workoutCard.append(workoutCardFocus, wcInfo, overlay);
  wcInfo.append(workoutCardIntensity, wcDate);

  workoutCard.classList.add('workout-card', workoutClass, 'wc-img');
  overlay.classList.add('overlay');
  wcInfo.classList.add('wc-info');
}

/* ********** Creates and appends 'Exercises to try' items ********** */
function createETT(exerciseList) {
  let exerciseListETT = [];
  let exercisesObjETT = {};
  let exercisesETT = [];
  while (exercisesETT.length < 5) {
    exerciseListETT.push(exerciseList[randomIndexGen(exerciseList.length)]);
    for (let i of exerciseListETT) {
      exercisesObjETT[i] = true;
    }
    exercisesETT = Object.keys(exercisesObjETT);
  }
  console.log(exercisesETT);
  for (let i = 0; i <= exercisesETT.length - 1; i++) {
    let ettItem = document.createElement('div');
    let ettNumber = document.createElement('h4');
    let ettName = document.createElement('p');

    console.log(i + 1);
    ettItem.classList.add('ett-item');
    ettNumber.textContent = i + 1;
    ettName.textContent = exercisesETT[i];

    exercisesToTry.appendChild(ettItem);
    ettItem.append(ettNumber, ettName);
  }
}

function randomIndexGen(listLength) {
  let randomIndex = Math.floor(Math.random() * listLength);
  return randomIndex;
}

function randomSetGen(set) {
  if (set === 'heavy') {
    let randomSet = Math.floor(Math.random() * 3) + 3;
    return randomSet;
  } else {
    let randomSet = Math.floor(Math.random() * 2) + 3;
    return randomSet;
  }
}

function randomRepGen(rep) {
  if (rep == 'heavy') {
    let randomRep = Math.floor(Math.random() * 4) + 4;
    return randomRep;
  } else {
    let randomRep = Math.floor(Math.random() * 5) + 8;
    return randomRep;
  }
}

function createExerciseCard(exerciseArr, setNum, repNum) {
  let totalSets = 0;
  let totalReps = 0;
  for (let i = 0; i <= exerciseArr.length - 1; i++) {
    let exerciseCard = document.createElement('div');
    let exerciseCardInfo = document.createElement('div');
    let exerciseCardSR = document.createElement('div');
    let exerciseNameCard = document.createElement('h4');
    let exerciseNum = document.createElement('h4');
    let setsCard = document.createElement('p');
    let repsCard = document.createElement('p');

    exerciseNameCard.textContent = exerciseArr[i];
    exerciseNum.textContent = i + 1;
    setsCard.textContent = `Sets: ${randomSetGen(setNum)}`;
    repsCard.textContent = `Reps: ${randomRepGen(repNum)}`;
    totalSets += Number(setsCard.textContent);
    totalReps += Number(repsCard.textContent);

    yourWorkout.appendChild(exerciseCard);
    exerciseCard.append(exerciseNum, exerciseCardInfo);
    exerciseCardInfo.append(exerciseNameCard, exerciseCardSR);
    exerciseCardSR.append(setsCard, repsCard);

    exerciseCard.classList.add('exercise-card');
    exerciseNum.classList.add('exercise-num');
    exerciseCardSR.classList.add('exercise-sets-reps');
    exerciseNameCard.classList.add('exercise-name');
  }

  let totalSetsCard = document.createElement('h2');
  let totalRepsCard = document.createElement('h2');

  totalSetsCard.textContent = totalSets;
  totalRepsCard.textContent = totalReps;
}

let exercises = [];
let sortedExercises = [];
function createExercises(exerciseList, setNum, repNum, exerciseCount) {
  let exercisesObj = {};
  let exercisesB = [];
  while (exercisesB.length < exerciseCount) {
    exercises.push(exerciseList[randomIndexGen(exerciseList.length)]);
    for (let i of exercises) {
      exercisesObj[i] = true;
    }
    exercisesB = Object.keys(exercisesObj);
  }
  // console.log(exercisesB, setNum, repNum);

  createExerciseCard(exercisesB, setNum, repNum);
}

/* Function used to sort the exercise name, sets, and reps */
function selectWorkout(selection, exerciseType, exerciseCount) {
  if (selection === 'heavy') {
    let setClass = 'heavy';
    let repClass = 'heavy';
    createExercises(exerciseType, setClass, repClass, exerciseCount);
  } else if (selection === 'light') {
    let setClass = 'light';
    let repClass = 'light';
    createExercises(exerciseType, setClass, repClass, exerciseCount);
  }
}

/* ********** Event listeners for each class of workout ********** */
function fbWorkoutSelector() {
  const fbHeavyBtn = document.querySelector('.fb-heavy-class');
  const fbLightBtn = document.querySelector('.fb-light-class');
  let exerciseCount = 8;
  fbHeavyBtn.addEventListener('click', () => {
    let selection = 'heavy';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, fullBodyExercises, exerciseCount);
  });
  fbLightBtn.addEventListener('click', () => {
    let selection = 'light';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, fullBodyExercises, exerciseCount);
  });
}

function ubWorkoutSelector(selector) {
  const ubHeavyBtn = document.querySelector('.ub-heavy-class');
  const ubLightBtn = document.querySelector('.ub-light-class');
  let exerciseCount = 6;
  ubHeavyBtn.addEventListener('click', () => {
    let selection = 'heavy';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, upperExercises, exerciseCount);
  });
  ubLightBtn.addEventListener('click', () => {
    let selection = 'light';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, upperExercises, exerciseCount);
  });
}

function lbWorkoutSelector(selector) {
  const lbHeavyBtn = document.querySelector('.lb-heavy-class');
  const lbLightBtn = document.querySelector('.lb-light-class');
  let exerciseCount = 6;
  lbHeavyBtn.addEventListener('click', () => {
    let selection = 'heavy';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, legExercises, exerciseCount);
  });
  lbLightBtn.addEventListener('click', () => {
    let selection = 'light';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, legExercises, exerciseCount);
  });
}

function pushWorkoutSelector(selector) {
  const pushHeavyBtn = document.querySelector('.push-heavy-class');
  const pushLightBtn = document.querySelector('.push-light-class');
  let exerciseCount = 6;
  pushHeavyBtn.addEventListener('click', () => {
    let selection = 'heavy';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, pushExercises, exerciseCount);
  });
  pushLightBtn.addEventListener('click', () => {
    let selection = 'light';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, pushExercises, exerciseCount);
  });
}

function pullWorkoutSelector(selector) {
  const pullHeavyBtn = document.querySelector('.pull-heavy-class');
  const pullLightBtn = document.querySelector('.pull-light-class');
  let exerciseCount = 6;
  pullHeavyBtn.addEventListener('click', () => {
    let selection = 'heavy';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, pullExercises, exerciseCount);
  });
  pullLightBtn.addEventListener('click', () => {
    let selection = 'light';
    workoutPage.classList.add('hidden');
    yourWorkoutPage.classList.remove('hidden');
    selectWorkout(selection, pullExercises, exerciseCount);
  });
}

/* ********** Event listeners for Home Page ********** */
fbBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  workoutPage.classList.remove('hidden');

  createWorkoutCard('Full Body', 'Heavy', 'fb-heavy-class');
  createWorkoutCard('Full Body', 'Light', 'fb-light-class');

  fbWorkoutSelector();
  createETT(fullBodyExercises);
});

ubBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  workoutPage.classList.remove('hidden');

  createWorkoutCard('Upper Body', 'Heavy', 'ub-heavy-class');
  createWorkoutCard('Upper Body', 'Light', 'ub-light-class');

  ubWorkoutSelector();
  createETT(upperExercises);
});

lbBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  workoutPage.classList.remove('hidden');

  createWorkoutCard('Lower Body', 'Heavy', 'lb-heavy-class');
  createWorkoutCard('Lower Body', 'Light', 'lb-light-class');

  lbWorkoutSelector();
  createETT(legExercises);
});

pushBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  workoutPage.classList.remove('hidden');

  createWorkoutCard('Push', 'Heavy', 'push-heavy-class');
  createWorkoutCard('Push', 'Light', 'push-light-class');

  pushWorkoutSelector();
  createETT(pushExercises);
});

pullBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  workoutPage.classList.remove('hidden');

  createWorkoutCard('Pull', 'Heavy', 'pull-heavy-class');
  createWorkoutCard('Pull', 'Light', 'pull-light-class');

  pullWorkoutSelector();
  createETT(pullExercises);
});

/* THIS WAS ALL IN THE createExercises() */
// let exercisesFinal = [];
// let exercise = [];
// exercises.push(exerciseList[randomIndexGen(exerciseList.length)]);
// sortedExercises = exercises.slice().sort();
// console.log(sortedExercises);

// for (let i = 0; i < sortedExercises.length; i++) {
//   if (sortedExercises[i + 1] !== sortedExercises[i]) {
//     exercisesFinal.push(sortedExercises[i]);
//   }
//   // while (exercisesFinal.length < 7) {
//   //   exercises.push(exerciseList[randomIndexGen(exerciseList.length)]);
//   //   sortedExercises = exercises.slice().sort();
//   //   console.log(sortedExercises);

//   //   for (let i = 0; i < sortedExercises.length; i++) {
//   //     if (sortedExercises[i + 1] !== sortedExercises[i]) {
//   //       exercisesFinal.push(sortedExercises[i]);
//   //     }
//   //     console.log(exercisesFinal);
//   //   }
// }
// console.log(exercisesFinal);
// maybe put an exercises[] reset at the end of select workout function

// let exerciseName = exerciseList[randomIndexGen(legExercises.length)];
//  push to a set instead of array?
//  maybe i need to push each one if its not contained, then destructure and then create the exercise card with those values.
//  also maybe set the value of sets and reps and use that value twice for the super sets.

// exerciseNameCard.textContent = exerciseName;

// exerciseNameCard.textContent =
//   exerciseList[randomIndexGen(exerciseList.length)];
// setsCard.textContent = randomSetGen(setNum);
// repsCard.textContent = randomRepGen(repNum);

// yourworkout.appendChild(exerciseCard);
// exerciseCard.append(exerciseNameCard, setsCard, repsCard);

//  THESE ARE FOR IF I WANTED TO USE AN ARRAY
// exercise.push(exerciseList[randomIndexGen(legExercises.length)]);
// exercise.push(randomSetGen(setNum));
// exercise.push(randomRepGen(repNum));
// console.log(exercise);

// let sets = randomSetGen(setNum);
// let reps = randomRepGen(repNum);
