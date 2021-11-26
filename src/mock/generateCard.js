import dayjs from 'dayjs';

const COMMENTS_COUNT = 5;
const EMOJI = ['angry.png', 'puke.png', 'sleeping.png', 'smile.png'];

const userNames = [
  'Tim Macoveev',
  'Kirill Aksenov',
  'Rail Sakhaviev',
  'Elvis Presley',
];

const images = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

const getRandowArrayElements = (array) => {
  const index = getRandomInteger(0, array.length - 1);
  return array[index];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(0, maxDaysGap);
  return dayjs().add(daysGap, 'day').toDate();
};

const generateComment = () => {
  const comment = {
    emoji: getRandowArrayElements(EMOJI),
    date: generateDate(),
    user: getRandowArrayElements(userNames),
    message: 'Interesting setting and a good cast',
  };
  return comment;
};

export const generateFilmCard = () => ({
  poster: getRandowArrayElements(images),
  control: {
    watchlist: false,
    watched: false,
    favorite: false,
  },
  title: 'Popeye the Sailor Meets Sindbad the Sailor',
  rating: '6.3',
  year: '1936',
  runTime: '1h 36m',
  genre: 'Cartoon',
  description: generateDescription(),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    generateComment
  ).length,
});

export const generatePopupCard = () => ({
  poster: '/public/images/posters/popeye-meets-sinbad.png',
  title: 'Popeye the Sailor Meets Sindbad the Sailor',
  raiting: '6.3',
  director: '',
  screenwriter: '',
  cast: [],
  dateOfRelease: '',
  runTime: '',
  country: '',
  genres: [],
  fullDescription: [],
  ageRating: [],
  control: {
    watchlist: false,
    watched: false,
    favorite: false,
  },
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    generateComment
  ),
});
