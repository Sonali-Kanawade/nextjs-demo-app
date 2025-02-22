"use client"
// write here service calls

export const getPlaceholderPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    return res
    // return { statusCode: 200, body: res };
  } catch (error) {
    console.log("Something went wrong fetching posts", error);
    // return { stausCode: 500 };
  }
};
