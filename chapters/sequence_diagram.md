title Modern Farm
participant Main
participant Plan
Main-->Plan:I need the func to create a plan
Plan->Main:Here it is
note over Plan:Loop to create plans
Main-->Seeds:I need the seed objects
note over Seeds:Seed types: Asparagus, Corn, Potato, Soybean, Sunflower, Wheat
Seeds->Main:Here are the seeds
Main-->Field:I need the func to add a plant
Main-->Field:Do you have the usePlants clone of plants?
Field->Main:Here they are
Main-->Tractor:I need the func to plant seeds
Tractor->Main:Here it is
note over Tractor:Loop to create plants & add plants to seed array
Main-->Harvester:I need the func to harvest plants
Harvester->Main:Here it is
Main-->Catalog:I need the func to catalog the harvested foods
note over Catalog:Loop to add each harvest type to the HTML
Catalog->Main:Here's the catalog's generated HTML