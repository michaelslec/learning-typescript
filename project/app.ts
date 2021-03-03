const person = {
  name: "Michael",
  age: 22,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivites: string[];
favoriteActivites = ["string"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
