const plants = [] 

export const addPlant = (seed) => {
    // If any of the seeds are an array (corn), then push each array object into plants
    if (Array.isArray(seed)) {
        for (type of seed) {
            (plants.push(seed))}
    }
    
    else {
        plants.push(seed)
         }
    
}

export const usePlants = () => {
    return structuredClone(plants); 
}


// export const addPlant = (seed) => {
//     // If any of the seeds are an array (corn), then push each array object into plants
//     if (Array.isArray(seed)) {
//         seed.forEach(plants.push(seed))
//     }
    
//     else {
//         plants.push(seed)
//          }
    
// }

// export const usePlants = () => {
//     return structuredClone(plants); 
// }
