const usernames = [
  "joerogan",
  "kelila_fox24",
  "benjaminfry",
  "therealjamiefoxx",
];

const userAvatars = [
  "https://i.ibb.co/7b4FMXL/avatar-newday.jpg",
  "https://i.ibb.co/xzsp04x/avatar-wednesday.jpg",
  "https://i.ibb.co/LNLpvVb/avatar-friday.jpg",
  "https://i.ibb.co/NsWXJJ3/avatar-monday.jpg",
  "https://i.ibb.co/dk3LLyg/avatar-default.jpg",
];

const getRandomUser = () => {
  const user = usernames[Math.floor(Math.random() * usernames.length)];
  return user;
};

export const getRandomAvatar = () => {
  const avatar = userAvatars[Math.floor(Math.random() * userAvatars.length)];
  return avatar
};

export default getRandomUser;
