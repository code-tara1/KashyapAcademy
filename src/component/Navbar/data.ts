export const navItems = [
  {
    id: 1,
    name: "Home",
    to: "",
  },
  {
    id: 2,
    name: "About",
    to: "about",
  },
  {
    id: 3,
    name: "Course",
    to: "course",
    sublinks: [
      {
        id: 1,
        name: "Science",
        to: "course/science",
      },
      {
        id: 2,
        name: "Management",
        to: "course/management",
      },
      {
        id: 3,
        name: "Law",
        to: "course/law",
      },
    ],
  },
  {
    id: 4,
    name: "Events",
    to: "events",
  },
  {
    id: 5,
    name: "Gallery",
    to: "gallery",
  },
  {
    id: 6,
    name: "Blog",
    to: "blogs",
  },
  {
    id: 7,
    name: "Contact",
    to: "contact",
  },
];
