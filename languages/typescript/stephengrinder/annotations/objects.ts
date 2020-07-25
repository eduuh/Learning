const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 23,
  },

  setAge(age: number) {
    this.age = age;
  },
};

// Destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

