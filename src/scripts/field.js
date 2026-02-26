import { addPlant } from "./tractor.js"

const plants = [] 

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.foreach(seed.push(seed))

    /* for (int i = 0; i < seed.length; i++){
          seed.push(seed[i])
     }
    */
    }
    
    else {
        plants.push(seed)
    }
}

export const usePlants = () => {
    return structuredClone(plants); 
}
