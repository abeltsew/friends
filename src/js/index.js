const mobileMenu = document.querySelector('.mobile-menu i');
const menu = document.querySelectorAll('.menu-mobile,.mobile-menu i');

const toogleMenu = () => {
  menu[1].classList.toggle('hideMenu');
};

menu.forEach((list) => {
  list.addEventListener('click', () => toogleMenu());
});

const setBg = (on) => {
  if (on) {
    mobileMenu.style.background = '#fff';
    mobileMenu.style.padding = '0.5rem';
    mobileMenu.style.borderRadius = '50%';
  } else {
    mobileMenu.style.background = 'none';
  }
};

window.addEventListener('scroll', () =>
  window.scrollY > 60 ? setBg(true) : setBg()
);

const guests = [
  {
    name: 'Chandler Bing',
    title: 'An Executive in statistical analysis and data reconfiguration',
    description:
      'Chandler is Known for his sarcastic sense of humor and bad luck in relationship.',
    image: '/assets/images/cb.jpeg',
  },
  {
    name: 'Rachel Green',
    title:
      "waitress at the coffee house Central Perk and Assitant in Bloomingdale's",
    description:
      "A fashion enthusiast and Monica Geller's best friend from childhood and Ross's big crash.",
    image: '/assets/images/rgreen.jpeg',
  },
  {
    name: 'Monica Geller',
    title: 'The "mother hen" of the group and a chef and a neat freak.',
    description:
      'Monica is known for her perfectionist, bossy, competitive, and obsessive-compulsive nature.',
    image: '/assets/images/mg.jpeg',
  },
  {
    name: 'Phoebe Buffay',
    title: 'A masseuse and self-taught musician and author of "smally-cat"',
    description:
      'She writes and sings her own strange songs, accompanying herself on the guitar.',
    image: '/assets/images/pb.jpeg',
  },
  {
    name: 'Joey Tribbiani',
    title: 'A struggling famous actor for his role on soap opera.',
    description:
      'Joey has many short-term girlfriends. Despite his womanizing, Joey is innocent, caring, and well-intentioned',
    image: '/assets/images/jt.jpeg',
  },
  {
    name: 'Ross Geller',
    title: 'A palaeontologist working at the Museum of Natural History',
    description:
      'Ross is involved in an on-again, off-again relationship with Rachel throughout the series.',
    image: '/assets/images/rg.jpeg',
  },
];

const guestsList = document.querySelector('.guests-list');

guests.forEach((guest, i) => {
  const guestDiv = document.createElement('div');
  guestDiv.classList.add('guest-div');
  if (i > 1) {
    guestDiv.classList.add('hide');
  }
  const img = document.createElement('img');
  img.classList.add('guest-img');
  img.src = guest.image;

  const imgCover = document.createElement('img');
  imgCover.classList.add('img-cover');
  imgCover.src = '/assets/images/bg-art.png';

  const guestDescription = document.createElement('div');
  guestDescription.classList.add('guest-description');

  const guestName = document.createElement('h3');
  guestName.classList.add('guest-name');
  guestName.innerHTML = guest.name;

  const guestTitle = document.createElement('h3');
  guestTitle.classList.add('guest-title');
  guestTitle.innerHTML = guest.title;

  const guestDesc = document.createElement('h3');
  guestDesc.classList.add('guest-desc');
  guestDesc.innerHTML = guest.description;

  guestDescription.appendChild(guestName);
  guestDescription.appendChild(guestTitle);
  guestDescription.appendChild(guestDesc);

  guestDiv.appendChild(imgCover);
  guestDiv.appendChild(img);
  guestDiv.appendChild(guestDescription);

  guestsList.appendChild(guestDiv);
});

const moreGuests = document.createElement('button');
moreGuests.classList.add('more');
moreGuests.innerHTML =
  'More <span><i class="fa-solid fa-chevron-down"></i><span>';

const showMore = () => {
  hidden = document.querySelectorAll('.hide');
  hidden.forEach((guest) => {
    guest.classList.toggle('hide');
  });
  moreGuests.classList.add('hide');
};

moreGuests.addEventListener('click', () => showMore());

guestsList.appendChild(moreGuests);
