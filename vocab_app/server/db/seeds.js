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
  },
  {
    name: "hat",
    pronunciation_aid: "null",
    image: "images/hat.jpg",
    category: "clothes",
    sentence1: "the hat is made of wool",
    sentence2: "My hat is red"
  },
  {
    name: "coat",
    pronunciation_aid: "null",
    image: "images/coat.jpg",
    category: "clothes",
    sentence1: "the coat is warm",
    sentence2: "I wear my coat in winter"
  },
  {
    name: "shoes",
    pronunciation_aid: "null",
    image: "images/shoes.jpg",
    category: "clothes",
    sentence1: "the shoes are muddy",
    sentence2: "Her shoes are green"
  },
  {
    name: "t-shirt",
    pronunciation_aid: "null",
    image: "images/t-shirt.jpg",
    category: "clothes",
    sentence1: "the t-shirt is in the washing machine",
    sentence2: "His t-shirt is yellow"
  },
  {
    name: "shorts",
    pronunciation_aid: "null",
    image: "images/shorts.jpg",
    category: "clothes",
    sentence1: "the shorts are drying in the sun",
    sentence2: "My shorts are for sunny days"
  },
  {
    name: "mountain",
    pronunciation_aid: "null",
    image: "images/mountain.jpg",
    category: "landscape",
    sentence1: "the mountain is high",
    sentence2: "the women climb the mountain"
  },
  {
    name: "river",
    pronunciation_aid: "null",
    image: "images/river.jpg",
    category: "landscape",
    sentence1: "the river is full of water",
    sentence2: "i like to throw stones into the river"
  },
  {
    name: "field",
    pronunciation_aid: "null",
    image: "images/field.jpg",
    category: "landscape",
    sentence1: "the field is green",
    sentence2: "the cows in the field eat grass"
  },
  {
    name: "forest",
    pronunciation_aid: "null",
    image: "images/forest.jpg",
    category: "landscape",
    sentence1: "a forest has many trees",
    sentence2: "I blah blah blah"
  },
  {
    name: "tree",
    pronunciation_aid: "null",
    image: "images/tree.jpg",
    category: "landscape",
    sentence1: "the tree is in the forest",
    sentence2: "I like to climb trees"
  },
  {
    name: "path",
    pronunciation_aid: "null",
    image: "images/path.jpg",
    category: "landscape",
    sentence1: "the sheep are walking along the path",
    sentence2: "a more complex sentence about paths but not in a heideggerian way"
  },
  {
    name: "house",
    pronunciation_aid: "null",
    image: "images/house.jpg",
    category: "buildings",
    sentence1: "the house has four windows",
    sentence2: "The people live in a house"
  },
  {
    name: "school",
    pronunciation_aid: "null",
    image: "images/school.jpg",
    category: "buildings",
    sentence1: "school",
    sentence2: "school"
  },
  {
    name: "tower block",
    pronunciation_aid: "null",
    image: "images/tower-block.jpg",
    category: "buildings",
    sentence1: "tower block",
    sentence2: "tower block"
  },
  {
    name: "supermarket",
    pronunciation_aid: "null",
    image: "images/supermarket.jpg",
    category: "buildings",
    sentence1: "supermarket",
    sentence2: "supermarket"
  },
  {
    name: "community centre",
    pronunciation_aid: "null",
    image: "images/community-centre.jpg",
    category: "buildings",
    sentence1: "community centre",
    sentence2: "community centre"
  },
  {
    name: "train station",
    pronunciation_aid: "null",
    image: "images/train-station.jpg",
    category: "buildings",
    sentence1: "train station",
    sentence2: "train station"
  }
])
