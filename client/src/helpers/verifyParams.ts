export default function(params: any , type:string){
    switch(type){
        case "computers":
            let result = params;

            if(result.brand.length === 0){
                result.brand = ["HP", "Asus", "Dell"]
            }

            if(result.procesor.length === 0){
                result.procesor = ["AMDRyzen5", "AMDRyzen7", "IntelCorei5", "IntelCorei7"]
            }

            if(result.memory.length === 0){
                result.memory = ["8gb", "16gb", "24gb", "32gb"]
            }

            if(result.storage.length === 0){
                result.storage = ["1TB256GBSSD" , "1TBSSD" , "512GBSSD"]
            }

            if(result.graphicsCard.length === 0){
                result.graphicsCard = ["GTX1650" , "RTX3050" , "RTX3050ti"]
            }

            return result;
        case "keyboards":

            break;
        case "screens":
            break;
        case "mouses":
            break;
        default:
            break;
    }
}