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


const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()

console.log(asparagusSeed)
console.log(wheatSeed)


console.log("Welcome to the main module")

