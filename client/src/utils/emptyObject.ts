export default function emptyObject(object: any){
    for(let key in object){
        if(object[key] !== ""){
            return false;
        }
    }
    return true;
}