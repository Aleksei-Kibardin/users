const getRes = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  const json = await response.json();
  return json;
};

export const getUsers = () => {
  return getRes("https://jsonplaceholder.typicode.com/users");
};

export const getPosts = (id) => {
  return getRes(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
};

export const getPhotos = () => {
  return getRes(`https://jsonplaceholder.typicode.com/photos`);
};