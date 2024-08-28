let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let degrees=document.querySelector("#degrees");
    let type=document.querySelector("#type");
    let Result=document.querySelector("#Result");
    let from=document.querySelector("#from");

    let a=degrees.value;
    if((type.value===from.value)&&(type.value==="Celsius")){
        Result.value=`${a}°C`;
    }
    if((type.value===from.value)&&(type.value==="Fahrenheit")){
            Result.value=`${a}°F`;
    }
    if(type.value==="Celsius"){
        Result.value=`${(a*9/5)+32}°C`;
   }
   if(type.value==="Fahrenheit"){
    Result.value=`${(a-32)*5/9}°F`;
    }
})