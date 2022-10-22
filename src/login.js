export const Login = async (id) => {
  switch (id) {
    case "1":
      return { id: "1", name: "Tom" };
    case "2":
      return { id: "2", name: "Jerry" };
    default:
      return { id: null, name: null };
  }
};
