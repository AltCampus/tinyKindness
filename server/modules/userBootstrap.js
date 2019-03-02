const User = require('./../models/User');
const async = require('async')

const dummyUsers = [
  {
    name: 'User1',
    username: '@user1',
    imageURL : 'https://dummyimage.com/vga',
    bio: 'Dummy User',
    introductions: ['5c4fd7f77f9e647a7509836f', '5c4fd7f77f9e647a7509833c', '5c4fd7f77f9e647a75098346'],
    resources: ['5c4fd7f77f9e647a75098385'],
    feedback: ['5c4fd7f77f9e647a750982ca']
  },
  {
    name: 'User2',
    username: '@user2',
    imageURL : 'https://dummyimage.com/vga',
    bio: 'Dummy User',
    introductions: ['5c4fd7f77f9e647a7509836f', '5c4fd7f77f9e647a7509833c', '5c4fd7f77f9e647a75098346'],
    resources: ['5c4fd7f77f9e647a75098385'],
    feedback: ['5c4fd7f77f9e647a750982ca']
  },
  {
    name: 'User3',
    username: '@user3',
    imageURL : 'https://dummyimage.com/vga',
    bio: 'Dummy User',
    introductions: ['5c4fd7f77f9e647a7509836f', '5c4fd7f77f9e647a7509833c', '5c4fd7f77f9e647a75098346'],
    resources: ['5c4fd7f77f9e647a75098385'],
    feedback: ['5c4fd7f77f9e647a750982ca']
  },
  {
    name: 'User4',
    username: '@user4',
    imageURL : 'https://dummyimage.com/vga',
    bio: 'Dummy User',
    introductions: ['5c4fd7f77f9e647a7509836f', '5c4fd7f77f9e647a7509833c', '5c4fd7f77f9e647a75098346'],
    resources: ['5c4fd7f77f9e647a75098385'],
    feedback: ['5c4fd7f77f9e647a750982ca']
  }
]

User.insertMany(dummyUsers)