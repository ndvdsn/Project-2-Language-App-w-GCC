use esol_vocabulary;
db.dropDatabase();

db.vocabulary.insertMany([
  {
    name: "cat",
    pronunciation_aid: "null",
    image: "images/cat.jpg",
    category: "animals",
    sentence1: "the cat eats a fish",
    sentence2: "my cat is called Twinkles"
  },
  {
    name: "shark",
    pronunciation_aid: "null",
    image: "images/shark.jpg",
    category: "animals",
    sentence1: "the shark swims in a circle",
    sentence2: "i saw a shark in the park"
  },
  {
    name: "hedgehog",
    pronunciation_aid: "null",
    image: "images/hedgehog.jpg",
    category: "animals",
    sentence1: "the hedgehog rolls into a ball",
    sentence2: "i found a hedgehog under some leaves"
  },
  {
    name: "fox",
    pronunciation_aid: "null",
    image: "images/fox.jpg",
    category: "animals",
    sentence1: "the fox is in the bin",
    sentence2: "last night i heard a fox shouting"
  },
  {
    name: "rabbit",
    pronunciation_aid: "null",
    image: "images/rabbit.jpg",
    category: "animals",
    sentence1: "the rabbit lives in a hole",
    sentence2: "there are rabbits in my garden"
  },
  {
    name: "deer",
    pronunciation_aid: "null",
    image: "images/deer.jpg",
    category: "animals",
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
    sentence1: "the shoes are blue",
    sentence2: "i have one shoe for each foot"
  },
  {
    name: "scarf",
    pronunciation_aid: "null",
    image: "images/scarf.jpg",
    category: "clothes",
    sentence1: "the scarf is long",
    sentence2: "His scarf is yellow"
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
    name: "jumper",
    pronunciation_aid: "null",
    image: "images/jumper.jpg",
    category: "clothes",
    sentence1: "the jumper is blue",
    sentence2: "I have a blue jumper"
  },
  {
    name: "mountain",
    pronunciation_aid: "null",
    image: "images/mountain.jpg",
    category: "landscape",
    sentence1: "the mountain is far away",
    sentence2: "the mountain is covered in snow"
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
    name: "road",
    pronunciation_aid: "null",
    image: "images/road.jpg",
    category: "landscape",
    sentence1: "the road is not safe",
    sentence2: "we drive down the road in a car"
  },
  {
    name: "forest",
    pronunciation_aid: "null",
    image: "images/forest.jpg",
    category: "landscape",
    sentence1: "a forest has many trees",
    sentence2: "I planted a tree in a forest"
  },
  {
    name: "tree",
    pronunciation_aid: "null",
    image: "images/tree.jpg",
    category: "landscape",
    sentence1: "the tree is green",
    sentence2: "I like to climb trees"
  },
  {
    name: "park",
    pronunciation_aid: "null",
    image: "images/park.jpg",
    category: "landscape",
    sentence1: "the park has a pond",
    sentence2: "we went to the park to play games"
  },
  {
    name: "potatoes",
    pronunciation_aid: "null",
    image: "images/potatoes.jpg",
    category: "food",
    sentence1: "potatoes come out of the ground",
    sentence2: "My dad mashes potatoes"
  },
  {
    name: "apple",
    pronunciation_aid: "null",
    image: "images/apple.jpg",
    category: "food",
    sentence1: "apples are often green",
    sentence2: "i have an apple in my bag"
  },
  {
    name: "sandwich",
    pronunciation_aid: "null",
    image: "images/sandwich.jpg",
    category: "food",
    sentence1: "a cheese and ham sandwich",
    sentence2: "my favourite sandwich filling is jam"
  },
  {
    name: "grapefruit",
    pronunciation_aid: "null",
    image: "images/grapefruit.jpg",
    category: "food",
    sentence1: "grapefruit is sour",
    sentence2: "i have a special spoon for eating grapefruit"
  },
  {
    name: "pasta",
    pronunciation_aid: "null",
    image: "images/pasta.jpg",
    category: "food",
    sentence1: "pasta starts out hard and then you cook it until it gets soft",
    sentence2: "something about pasta"
  },
  {
    name: "sausages",
    pronunciation_aid: "null",
    image: "images/sausages.jpg",
    category: "food",
    sentence1: "there are five sausages",
    sentence2: "i don't like sausages"
  }
])
