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
        alert("Name is required");
    } 
    else if (!isNaN(a)) {
        alert("Enter name only in text");
        console.log(a);
    } 
    else if (b == "") {
        alert("Email is required");
    } 
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(b)) {
        alert("Invalid Email Address");
    } 
    else if (c == "") {
        alert("Phone is required");
    } 
    else if (!/^0\d{10}$/.test(c)) {
        alert("Phone Number should be of 11 digits and start with 0");
        document.getElementById("phone").focus();
    } 
    else if (i.length > 150) {
        alert("Max limit is 150 words");
        textarea1.style.backgroundColor = "blue";
        textarea1.focus();
    } 
    else if (j.length > 150) {
        alert("Max limit is 150 words");
        textarea2.style.backgroundColor = "blue";
        textarea2.focus();
    } 
    else if (k.length > 150) {
        alert("Max limit is 150 words");
        textarea3.style.backgroundColor = "blue";
        textarea3.focus();
    } 
    else if (l.length > 150) {
        alert("Max limit is 150 words");
        textarea4.style.backgroundColor = "blue";
        textarea4.focus();
    } 
    else if (m.length > 150) {
        alert("Max limit is 150 words");
        textarea5.style.backgroundColor = "blue";
        textarea5.focus();
    }
}
