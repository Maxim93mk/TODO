import user_1 from "./img/foto_1.svg";
import user_2 from "./img/foto_2.svg";
import ToDo_img from './img/ToDo.png';
import InProgress from './img/InProgress.png';
import Review from './img/Review.png';
import Done from './img/Done.png';

let data = [
  {
    id: 1,
    name: 'To Do',
    task: 'Christmas Banners',
    status: 'Label',
    user: user_1,
    icon: ToDo_img
  },
  {
    id: 2,
    name: 'In Progress',
    task: 'Coffee Break',
    status: 'Always',
    user: user_2,
    icon: InProgress
  },
  {
    id: 3,
    name: 'Review',
    task: 'Release to Figma Community',
    status: 'Release',
    user: user_1,
    icon: Review
  },
  {
    id: 4,
    name: 'Done',
    task: 'Style Guide',
    status: 'UI',
    user: user_2,
    icon: Done,
  },
  {
    id: 5,
    name: 'Done',
    task: 'Component Library',
    status: 'UI',
    user: user_2,
    icon: Done,
  },
  {
    id: 6,
    name: 'Done',
    task: 'Sticker Components',
    status: 'UI',
    user: user_2,
    icon: Done,
  },
  {
    id: 7,
    name: 'In Progress',
    task: 'Updating Portfolio',
    status: 'Webflow',
    user: user_2,
    icon: InProgress
  },
  {
    id: 8,
    name: 'Review',
    task: 'User Feedback',
    status: 'Feedback',
    user: user_1,
    icon: Review
  },
  {
    id: 9,
    name: 'To Do',
    task: 'Redo Portfolio',
    status: 'Label',
    user: user_1,
    icon: ToDo_img
  },
  {
    id: 10,
    name: 'Review',
    task: 'Background images from humaaans.com',
    status: 'Sourcing',
    user: user_1,
    icon: Review
  }
];

export const dataList = {
  data: data
} 