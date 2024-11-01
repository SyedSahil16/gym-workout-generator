export const TEMPOS = ['3 0 2', '2 2 2', '4 1 1', '5 3 1', '1 0 1', '3 2 1', '2 1 1']

export const SCHEMES = {
    strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60]
    },
    growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60]
    },
    cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45]
    }
}

export const WORKOUTS = {
    individual: ['biceps', 'triceps', 'chest', 'back', 'shoulders', 'quads', 'hamstrings', 'glutes', 'calves', 'abs'],
    bro_split: {
        push: ['triceps', 'chest', 'shoulders'],
        pull: ['back', 'shoulders', 'biceps'],
        legs: ['glutes', 'calves', 'hamstrings', 'quads']
    },
    bodybuilder_split: {
        chest: ['chest'],   
        back: ['back'],
        shoulders: ['shoulders'],
        legs: ['glutes', 'quads', 'hamstrings', 'calves'],
        arms: ['biceps', 'triceps'],
        abs: ['abs']
    },
    upper_lower: {
        upper: ['triceps', 'biceps', 'shoulders', 'chest', 'back'],
        lower: ['quads', 'calves', 'hamstrings', 'glutes']
    }
}

//write a function that flattens this thing with all the variants
//if athome, then have to specify equipment (if required otherwise bodyweight)
//add instructions for substitutions (at home substitutions) for weights etc
//variant is just going to be gym (forget about home stuff as long as one of the variants is
//make it so that you can't get the same varient in a single workout (maybe)
//add all the other variants to the subsubstitute list
//pick a random exercise
//for non-members, exclude all the at home specific exercises (anything particularly pussy like a lot of the bodyweight stuff)

const bw_exercises = {

}

export const EXERCISES = {
    chest: {
        name: "Bench Press",
        description: "Lie back on a flat bench holding a barbell. Press the barbell up until arms are extended, then lower slowly.",
        unit: "reps"
    },
    shoulders: {
        name: "Shoulder Press",
        description: "Sit with back support. Press dumbbells straight overhead until arms are extended, then lower slowly.",
        unit: "reps"
    },
    back: {
        name: "Pull-Up",
        description: "Hang from a pull-up bar and pull your body up until your chin is above the bar, then lower slowly.",
        unit: "reps"
    },
    biceps: {
        name: "Bicep Curl",
        description: "Hold dumbbells with palms facing forward. Curl weights toward shoulders, then lower slowly.",
        unit: "reps"
    },
    triceps: {
        name: "Tricep Extension",
        description: "Hold a dumbbell overhead with both hands. Lower behind head by bending elbows, then press back up.",
        unit: "reps"
    },
    legs: {
        name: "Squat",
        description: "Stand with feet shoulder-width apart. Lower down as if sitting, then return to standing.",
        unit: "reps"
    },
    abs: {
        name: "Crunch",
        description: "Lie on your back with knees bent. Lift shoulders off the ground and engage core, then lower slowly.",
        unit: "reps"
    },
    calves: {
        name: "Calf Raise",
        description: "Stand with feet shoulder-width apart. Rise onto the balls of your feet, then lower slowly.",
        unit: "reps"
    }
};
