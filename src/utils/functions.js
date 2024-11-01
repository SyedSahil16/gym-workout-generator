import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./excercises"
const exercises = exercisesFlattener(EXERCISES)



export function generateWorkout(args) {
    const { muscles, poison: workout, goal } = args;
    let listOfMuscles;

    // Determine the muscles list based on the workout type and selected muscles
    if (workout === "individual") {
        listOfMuscles = muscles;
    } else {
        listOfMuscles = WORKOUTS[workout][muscles[0]] || [];
    }

    // Get a unique list of muscles from the workout split
    listOfMuscles = Array.from(new Set(listOfMuscles));

    // Get scheme details based on the goal
    const scheme = SCHEMES[goal];
    const repsRange = scheme.repRanges;
    const restTime = scheme.rest[0];

    // Generate workout by selecting one exercise per muscle group
    const workoutPlan = listOfMuscles.map((muscleGroup) => {
        const exercise = EXERCISES[muscleGroup];
        if (!exercise) return null;

        // Determine repetitions and tempo for the exercise
        let reps = Math.min(...repsRange) + Math.floor(Math.random() * (Math.max(...repsRange) - Math.min(...repsRange)));
        const tempo = TEMPOS[Math.floor(Math.random() * TEMPOS.length)];

        return {
            name: exercise.name,
            /* muscleGroup: muscleGroup, */
            description: exercise.description,
            reps,
            tempo,
            rest: restTime,
        };
    });

    // Filter out any null exercises in case some muscle groups didn't have an entry
    return workoutPlan.filter(exercise => exercise !== null);
}

// Example usage:
// const args = { muscles: ["back"], poison: "bro_split", goal: "strength_power" };
// const workout = generateWorkout(args);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function exercisesFlattener(exercisesObj) {
    const flattenedObj = {}

    for (const [key, val] of Object.entries(exercisesObj)) {
        if (!("variants" in val)) {
            flattenedObj[key] = val
        } else {
            for (const variant in val.variants) {
                let variantName = variant + "_" + key
                let variantSubstitutes = Object.keys(val.variants).map((element) => {
                    return element + ' ' + key
                }).filter(element => element.replaceAll(' ', '_') !== variantName)

                flattenedObj[variantName] = {
                    ...val,
                    description: val.description + '___' + val.variants[variant],
                    substitutes: [
                        ...val.substitutes, variantSubstitutes
                    ].slice(0, 5)
                }
            }
        }
    }
    return flattenedObj
}