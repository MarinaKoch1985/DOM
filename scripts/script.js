const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');

let cards_info = [];
 
const render = () => {
cardsContainer.innerText = '';

cards_info.forEach(({firstname, lastname, email,photo}) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailContainer = document.createElement('div');
    const emailTextElem = document.createElement('span');
    const emailElem = document.createElement('a');
    const photoElem = document.createElement('img');
    // const progressontainer = document.createElement('div');
    // const ProgressLine = document.createElement('div');
    // const ProgressValue = document.createElement('p');

    nameElem.innerText = `Name ${firstname} ${lastname}`;
    emailElem.innerText = email;
    emailTextElem.innerText = 'Email';

    email.href = `mailto: ${email}`;
    photoElem.src = photo;
    photoElem.alt = 'photo'

    cardElem.classList.add('card');
    photoElem.classList.add('photo');

    emailContainer.append( emailTextElem, emailElem);
    cardElem.append(nameElem, photoElem,);
        cardsContainer.append(cardElem);
    });
}

form.addEventListener( 'submit', event => {
    event.preventDefault();
    

        const { firstname, lastname, email, photo} = event.target; 

        cards_info.push({
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            photo: photo.value
        });

        firstname.value = '';
        lastname.value = '';
        email.value = '';
        photo.value = '';

        render();
        //render(cards_info[cards.info.length - 1])
})