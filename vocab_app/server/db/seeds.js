use esol_vocabulary;
db.dropDatabase();

db.vocabulary.insertMany([
  {
    name: "cat",
    pronunciation_aid: "null",
    image: "images/cat.jpg",
    category: "animal",
    sentence1: "the cat eats a fish",
    sentence2: "my cat is called Twinkles"
  },
  {
    name: "shark",
    pronunciation_aid: "null",
    image: "images/shark.jpg",
    category: "animal",
    sentence1: "the shark swims in a circle",
    sentence2: "i saw a shark in the park"
  },
  {
    name: "hedgehog",
    pronunciation_aid: "null",
    image: "images/hedgehog.jpg",
    category: "animal",
    sentence1: "the hedgehog rolls into a ball",
    sentence2: "i found a hedgehog under some leaves"
  },
  {
    name: "fox",
    pronunciation_aid: "null",
    image: "images/fox.jpg",
    category: "animal",
    sentence1: "the fox is in the bin",
    sentence2: "last night i heard a fox shouting"
  },
  {
    name: "rabbit",
    pronunciation_aid: "null",
    image: "images/rabbit.jpg",
    category: "animal",
    sentence1: "the rabbit lives in a hole",
    sentence2: "there are rabbits in my garden"
  },
  {
    name: "deer",
    pronunciation_aid: "null",
    image: "images/deer.jpg",
    category: "animal",
    sentence1: "the deer runs through the forest",
    sentence2: "I saw a deer near my house"
  }
])
