function validateform(){
const a=document.getElementById("name").value;
const b=document.getElementById("email").value;
const c=document.getElementById("phone").value;
if(a==""){
    alert("Name is required");
}
else if(!isNaN(a)){
    alert("Enter name only in text");
    console.log(a);
}
else if(b==""){
    alert("Email is required");
}
else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(b)){
    alert("Invalid Email Address");
}
else if (c==""){
    alert("Phone is required");
}
else if (!/^0\d{10}$/.test(c)) {
    alert("Phone Number should be of 11 digits and start with 0");
}
}
