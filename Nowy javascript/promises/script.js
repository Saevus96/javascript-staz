const load = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(resolve.ok){
            resolve(resolve.data);
        }else{
            reject(new Error("Błedne dane"));
        }
    },2000); 
}).then(
    resolve =>console.log(resolve),
    error => console.error(error)
);
