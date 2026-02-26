/*
1. Import function `createPlan` from module /plan.js

*/

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


const plan = plantSeeds(
    [
        ["Potato", "Soybean", "Soybean", "Corn"],
        ["Wheat", "Corn", "Wheat", "Asparagus"],
        ["Asparagus", "Wheat", "Soybean", "Corn"],
        ["Asparagus", "Soybean", "Potato", "Wheat"]
    ]
)
console.log(plan)


console.log("Welcome to the main module")

