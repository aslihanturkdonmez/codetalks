export default (data, type) =>{
    if(!data){
        return;
    }
    return Object.keys(data).map(key =>{
        return {
            id: key,
            ...data[key]
        };
    })/* .sort(function (a,b) {
        if(type=="oldest") {
            return a.date < b.date ? -1 : a.date > b.date ? 1: 0;
        }else {
            return a.date > b.date ? -1 : a.date < b.date ? 1: 0;
        }
    }); */
    
    
}