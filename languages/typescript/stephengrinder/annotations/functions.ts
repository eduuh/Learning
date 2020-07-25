const add = (a: number, b: number): number => {
  return a - b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};
//alternate forms of functions
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const yestadayWeather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
logWeather(yestadayWeather);
