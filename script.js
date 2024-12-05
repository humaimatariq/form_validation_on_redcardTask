function validateform() {
    const a = document.getElementById("name").value;
    const b = document.getElementById("email").value;
    const c = document.getElementById("phone").value;
    const textarea1 = document.getElementById("texarea1");
    const textarea2 = document.getElementById("texarea2");
    const textarea3 = document.getElementById("texarea3");
    const textarea4 = document.getElementById("texarea4");
    const textarea5 = document.getElementById("texarea5");

    const d = textarea1.value.trim();
    const e = textarea2.value.trim();
    const f = textarea3.value.trim();
    const g = textarea4.value.trim();
    const h = textarea5.value.trim();

    const i = d.split(/\s+/);
    const j = e.split(/\s+/);
    const k = f.split(/\s+/);
    const l = g.split(/\s+/);
    const m = h.split(/\s+/);


    textarea1.style.backgroundColor = "";
    textarea2.style.backgroundColor = "";
    textarea3.style.backgroundColor = "";
    textarea4.style.backgroundColor = "";
    textarea5.style.backgroundColor = "";

    if (a == "") {
        document.getElementById("name1").innerHTML="Name is required";
        name1.focus();
    } 
    else if (!isNaN(a)) {
        document.getElementById("name1").innerHTML="Enter name only in text";
        name1.focus();
    } 
    else if (b == "") {
        document.getElementById("email1").innerHTML="Email is required";
        email1.focus();
    } 
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(b)) {
        document.getElementById("email1").innerHTML="Invalid Email Address";
        email1.focus();
    } 
    else if (c == "") {
        document.getElementById("phone1").innerHTML="Phone is required";
        phone1.focus();
    } 
    else if (!/^0\d{10}$/.test(c)) {  
        document.getElementById("phone1").innerHTML="Phone Number should be of 11 digits and start with 0";
        phone1.focus();
    } 

    else if (i.length > 150) {
        document.getElementById("tax1").innerHTML="Max limit is 150 words";
        textarea1.style.backgroundColor = "blue";
        textarea1.focus();
    } 
    else if (j.length > 150) {
        document.getElementById("tax2").innerHTML="Max limit is 150 words";
        textarea2.style.backgroundColor = "blue";
        textarea2.focus();
    } 
    else if (k.length > 150) {
        document.getElementById("tax3").innerHTML="Max limit is 150 words";
        textarea3.style.backgroundColor = "blue";
        textarea3.focus();
    } 
    else if (l.length > 150) {
        document.getElementById("tax4").innerHTML="Max limit is 150 words";
        textarea4.style.backgroundColor = "blue";
        textarea4.focus();
    } 
    else if (m.length > 150) {
        document.getElementById("tax5").innerHTML="Max limit is 150 words";
        textarea5.style.backgroundColor = "blue";
        textarea5.focus();
    }
}
