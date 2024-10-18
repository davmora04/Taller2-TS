import { Serie } from "./Serie";

export const series: Serie[] = [
  new Serie({
    id: 1,
    name: "Breaking Bad",
    channel: "AMC",
    seasons: 5,
    description:
      "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
    webpage: "https://www.amc.com/shows/breaking-bad",
    image: "images/breakingbad.jpeg",
  }),
  new Serie({
    id: 2,
    name: "Orange Is the New Black",
    channel: "Netflix",
    seasons: 6,
    description:
      "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
    webpage: "https://www.netflix.com/co/title/70242311",
    image: "images/orangeisthenewblack.jpeg",
  }),
  new Serie({
    id: 3,
    name: "Game of Thrones",
    channel: "HBO",
    seasons: 7,
    description: "American fantasy drama",
    webpage: "https://www.hbo.com/game-of-thrones",
    image: "images/got.jpeg",
  }),
  new Serie({
    id: 4,
    name: "The Big Bang Theory",
    channel: "CBS",
    seasons: 12,
    description:
      "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
    webpage: "https://www.cbs.com/shows/big_bang_theory/about/",
    image: "images/tbbt.jpeg",
  }),
  new Serie({
    id: 5,
    name: "Sherlock",
    channel: "BBC",
    seasons: 4,
    description:
      "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
    webpage: "https://www.bbc.co.uk/programmes/b018ttws",
    image: "images/sherlock.jpeg",
  }),
  new Serie({
    id: 6,
    name: "A Very English Scandal",
    channel: "BBC",
    seasons: 2,
    description:
      "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
    webpage: "https://www.bbc.co.uk/programmes/p065smy4",
    image: "images/english.jpeg",
  }),
];