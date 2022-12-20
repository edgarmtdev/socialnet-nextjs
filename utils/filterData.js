function filterData(data, postID, comment) {
  data.forEach((post) => {
    if (post.id === postID) {
      post.comments.push(comment);
    }
  });
}

export default filterData;
