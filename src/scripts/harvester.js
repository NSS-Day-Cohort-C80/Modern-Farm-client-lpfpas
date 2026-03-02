

export const harvestPlants = (plantsArray) => {
    const seedArray = []
    for (const plant of plantsArray) {
        
        let count = plant.output
        if (plant.type === "Corn"){
            count = plant.output/2;
        }
/*
        while (count > 0) {
            seedArray.push(plant)
            count = count-1;
        }*/

        for (let i=count; i>0; i--){
            seedArray.push(plant);
        }

    }
    return seedArray
}

