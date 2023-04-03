// let form = document.querySelector("#submit-form");
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let data = new FormData(form);
//     fetch('https://script.google.com/macros/s/AKfycbzqIGPcazBQ2mBSfNyBv5SsdYRcj3aZNdpclRiRy3WXcaNCFpL8pYGAqtFDH4a7Ng_a/exec',{
//         method: 'POST',
//         body: data
//     })
//     .then(res=>res.text())
//     .then(data => console.log(data))
// })


function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = "none";
        success.style.display = "none";
    },4000);
}