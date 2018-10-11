let mdp1 = document.getElementById('mdp1');
let mdp2 = document.getElementById('mdp2');
let help = document.getElementById('infoMdp');
let form = document.querySelector('form');

let isValidate =false;

let regexMdp = /^.{6,}$/;


mdp1.addEventListener('blur',function (ev) {
    let msg = '';

    console.log('mdp 1 is in blur');
    if (!regexMdp.test(ev.target.value)){
        msg = 'You need at least 6 charactere';
    }
        help.textContent = msg;
})

mdp2.addEventListener('input',function (ev) {
    if (ev.target.value != mdp1.value) {
        help.textContent = 'pass have to be the same';
    }
    else {
        help.textContent = '';
    }
})

form.addEventListener('submit',function (e) {

    console.log('submit');
    e.preventDefault();

})