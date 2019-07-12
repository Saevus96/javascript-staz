const windows = window.open("https://www.google.com/", "No okienko xd", "directiories=0, height=200,width=200,location=0");

const inter = setInterval(function(){
    let var1 = Math.floor(Math.random() * (1800 - 1000 + 1) + 1000);  
    let var2 = Math.floor(Math.random() * (1000 - 800 + 1) + 800);   
    windows.moveTo(var1, var2); 
       
},1000/5);
