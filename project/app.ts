const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Michael",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivites: string[];
favoriteActivites = ["string"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
