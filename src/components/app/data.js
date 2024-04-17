import user_1 from "./img/foto_1.svg";
import user_2 from "./img/foto_2.svg";
import ToDo_img from './img/ToDo.png';
import InProgress from './img/InProgress.png';
import Review from './img/Review.png';
import Done from './img/Done.png';

let data = [
    {
      id: 1,
      cards: [
        'To Do',
        'In Progress',
        'Review',
        'Done',
      ],
      cardsIcons:[
        ToDo_img,
        InProgress,
        Review,
        Done
      ],
      tasks: [
        'Christmas Banners',
        'Redo Portfolio',
        'Coffee Break',
        'Updating Portfolio',
        'Release to Figma Community',
        'User Feedback',
        'Background images from humaaans.com',
        'Style Guide',
        'Component Library',
        'Sticker Components',
      ],
      status: [
        'Label',
        'Always',
        'Release',
        'Feedback',
        'Sourcing',
        'UI',
      ],
      user: [
        user_1,
        user_2,
      ]
    }
  ];

export  const dataList = {
    data: data
} 