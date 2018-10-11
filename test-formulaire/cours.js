/*Input type 'text'*/

let inputPseodo = document.getElementById('pseudo');

let helpInputPseodo = document.getElementById('aidePseudo');
inputPseodo.addEventListener('focus',function (ev) {

    console.log('pseodo is focus');
    helpInputPseodo.innerText = 'you have to write at leat 5 number';

})

inputPseodo.addEventListener('blur', function (ev) {
    console.log('pseodo was focus'+ev.target)
    helpInputPseodo.innerText = 'It s ok !'
})

/*Input element with option*/

/*check box*/
let mailConfirmation = document.getElementById('confirmation');

mailConfirmation.addEventListener('change',function (ev) {
    console.log('mail confirmation is'+ev.target.checked);
    ev.target.checked?helpInputPseodo.innerText = 'then you have to be sure that all it s ok':helpInputPseodo.innerText='';
})

/*radio button*/

let subscribeEle = document.getElementsByName('abonnement');

    for (let i = 0; i < subscribeEle.length; i++) {
            subscribeEle[i].addEventListener('change',function (e) {
                console.log('sub choice : '+e.target.value)
            })
    }

/*select*/

let nationality = document.getElementsByName('nationalite');

for (let i = 0; i < nationality.length; i++) {
    nationality[i].addEventListener('change',function (e) {
        console.log('you have choice the nationality of :'+e.target.value);
    })
}