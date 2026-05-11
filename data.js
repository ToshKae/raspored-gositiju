const TABLES = [
  {
    id: 0,
    label: "Mladenački sto",
    guests: [
      "Mlada", "Mladoženja", "Kum", "Kuma",
      "Tetka", "Teča", "Luka",
      "", "", "", "", ""
    ]
  },
  {
    id: 1,
    label: "Sto 1",
    subtitle: "Jovan i društvo",
    guests: [
      { name: "Vlade",        group: "vlade" },
      { name: "Vlade žena",   group: "vlade" },
      { name: "Jovan",        group: "jovic" },
      { name: "Sofija",       group: "jovic" },
      { name: "Iskra",        group: "jovic" },
      { name: "Stefan",       group: "stefan" },
      { name: "Stefan žena",  group: "stefan" },
      { name: "Stefan dete",  group: "stefan" },
      { name: "Kum",          group: "kum" },
      { name: "Kuma",         group: "kum" },
      { name: "Kum dete",     group: "kum" },
      ""
    ]
  },
  {
    id: 2,
    label: "Sto 2",
    guests: [
      "Baba Slobodanka", "Nadica", "Tetka", "Teča",
      { name: "Sale",  group: "sale-porodica" },
      { name: "Sanja", group: "sale-porodica" },
      { name: "Pavle", group: "sale-porodica" },
      "Filip",
      "Marija", "Dete", "Dete",
      ""
    ]
  },
  {
    id: 3,
    label: "Sto 3",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 4,
    label: "Sto 4",
    guests: [
      { name: "Srđan", group: "srdjan-goca" },
      { name: "Goca",  group: "srdjan-goca" },
      "Baba Bilja", "Baba Gaga",
      { name: "Milan",   group: "milan-javorka" },
      { name: "Javorka", group: "milan-javorka" },
      "Baba Kosa",
      "Stric Vlada", "Tetka Bilja", "Teča Aca",
      "", ""
    ]
  },
  {
    id: 5,
    label: "Sto 5",
    guests: [
      { name: "Tamara",        group: "drugarice" },
      { name: "Tamara sestra", group: "drugarice" },
      { name: "Mina",          group: "drugarice" },
      { name: "Kaca",          group: "drugarice" },
      { name: "Nikolina",      group: "drugarice" },
      { name: "Tina",          group: "drugarice" },
      "Kumina ćerka",
      "Anđela", "Miona",
      "Marija",
      "Milena", "Milena muž"
    ]
  },
  {
    id: 6,
    label: "Sto 6",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 7,
    label: "Sto 7",
    guests: [
      "Ivona", "Goran",
      "Jovana M.", "Jovana Đ.",
      "Maja",
      "Nikolina", "Nikolina muž",
      "Verica Milošević", "Teodora",
      "", "", ""
    ]
  },
  {
    id: 8,
    label: "Sto 8",
    guests: [
      "Bale", "Valentina",
      "Linija", "Linija žena",
      "Peđa", "Rakić",
      "Stevan", "Rade",
      "Dragan", "Đorđe",
      "Tomica", "Stefan"
    ]
  },
  {
    id: 9,
    label: "Sto 9",
    subtitle: "Tošići",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 10,
    label: "Sto 10",
    subtitle: "Tobolac",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 11,
    label: "Sto 11",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 12,
    label: "Sto 12",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 13,
    label: "Sto 13",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 14,
    label: "Sto 14",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 15,
    label: "Sto 15",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 16,
    label: "Sto 16",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 17,
    label: "Sto 17",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 18,
    label: "Sto 18",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 19,
    label: "Sto 19",
    guests: ["", "", "", "", "", "", "", "", "", "", "", ""]
  },
  {
    id: 20,
    label: "Sto 20",
    guests: [
      "Zorica", "Zorica dete",
      "Zoran", "Goca", "Dete", "Dete",
      "Miroljub", "Miroljub žena", "Dete", "Dete", "Dete",
      ""
    ]
  },
  {
    id: 21,
    label: "Sto 21",
    guests: [
      { name: "Aleksa",        group: "aleksa-devo" },
      { name: "Aleksa devojka", group: "aleksa-devo" },
      { name: "Goran",         group: "goran-devo" },
      { name: "Goran devojka", group: "goran-devo" },
      { name: "David",         group: "david-devo" },
      { name: "David devojka", group: "david-devo" },
      "Aca Miodragović",
      { name: "Ljubica",      group: "ljubica-muz" },
      { name: "Ljubica muž",  group: "ljubica-muz" },
      "Petar", "Milica",
      ""
    ]
  },
  {
    id: 22,
    label: "Sto 22",
    guests: [
      { name: "Džale", group: "dzale-masa" },
      { name: "Maša",  group: "dzale-masa" },
      { name: "Mirko",   group: "mirko-kristina" },
      { name: "Kristina", group: "mirko-kristina" },
      { name: "Miloš Milošanović", group: "milos-porodica" },
      { name: "Miloš žena",        group: "milos-porodica" },
      { name: "Miloš dete",        group: "milos-porodica" },
      { name: "Anita", group: "anita-jovan" },
      { name: "Jovan", group: "anita-jovan" },
      { name: "Nenad Dimitrijević", group: "nenad-dimi" },
      { name: "Nenad devojka",      group: "nenad-dimi" },
      ""
    ]
  },
  {
    id: 23,
    label: "Sto 23",
    guests: [
      "Kolega 1", "Kolega 2", "Kolega 3",
      "Kolega 4", "Kolega 5", "Kolega 6",
      "Kolega 7", "Kolega 8", "Kolega 9",
      "", "", ""
    ]
  }
];
