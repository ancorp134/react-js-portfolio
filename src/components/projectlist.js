import cryptomarket from "../assets/images/cryptomarket.jpg";
import ecommerce from "../assets/images/ecommerce.jpg";
import filesharing from "../assets/images/filesharing.jpg";
import starhotel from "../assets/images/sh.jpg";

export const ProjectList = [
    {
      key: 0,
      name: "Crypto Exchanger",
      image: cryptomarket,
      skills: "HTML, CSS, JavaScript, NextJs, Solidity",
      codeLink: "https://github.com/ancorp134/CryptoMarket",
      demoLink: "https://crypto-xchanger.netlify.app/",
      info: [
        "The main purpose of Crypto Exchanger is that it will provide user with the facility to convert their cryptocurrency into another.",
        "As if we had to spend our cryptocurrency to purchase the cryptocurrency which is accepted by the shop that will cost us losing certain amount of our cryptocurrency due to spending twice, one by selling it and another by purchasing that accepted cryptocurrency.",
        "This exchanger can provide multiple Functionality like trading services , price information , asset storage.",
        "Designed and developed a clean and modern website usingHTML, CSS, and JavaScript.",
      ],
    },
    {
      key: 1,
      name: "File Sharing Website",
      image: filesharing,
      skills: "Python, JavaScript, Bootstrap,Filepond, Django etc.",
      codeLink: "https://github.com/ancorp134/File-Sharing-App",
      demoLink: "https://dropit-files.herokuapp.com/",
      info: [
        "A platform that allows users to share files with their friends.Files with a size of less than 5MB can be shared.",
        "A URL is generated for uploaded files and this URL can beused to download files at a receiver end.",
        "Implemented Rest API, Serializers, and models using DjangoRest Framework.",
        "Designed and developed a clean and modern website usingHTML, CSS, and JavaScript.",
      ],
    },
  {
    key: 2,
    name: "Mart(E-commerce)",
    image: ecommerce,
    skills: "Python, HTML, CSS, JavaScript , Django etc.",
    codeLink: "https://github.com/ancorp134/",
    demoLink: "https://github.com/ancorp134/",
    info: [
      "Online store with many functionality like authentication and email verification",
      "Creating Various Models like Accounts, Orders, Cart,Categories, etc.",
      "Exposed POST, GET, PATCH, and DELETE HTTP methods using Django Rest Framework.",
      "Created with Django Framework Concepts like Pagination, Tokens,etc. And by using SQLite3 as a Database.",
    ],
  },
  {
    key: 3,
    name: "Star Hotel",
    image: starhotel,
    skills: "HTML, CSS, JavaScript, andFirebase as a Database.",
    codeLink: "https://github.com/ancorp134/Star-Hotel",
    demoLink: "https://starhotel-ankittyagi.netlify.app/",
    info: [
      "Creating Various Pages home, about, gallery, contact, and admin.",
      "Functionality like Search and Delete Booking.",
      "Created with Firebase services like Authentication,Real time database.",
      "Designed and developed a clean and modern website usingHTML, CSS, and JavaScript.",
    ],
  },
];
