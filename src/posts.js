let posts = [];

export const getPosts = async (post) => {
  posts = [...posts, post];
  return posts;
};
