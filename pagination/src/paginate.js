const paginate = (followers) => {
  const itmsPerPage = 8;
  const numberOfPages = Math.ceil(followers.length / itmsPerPage);
  const paginatedFollowers = Array.from(
    { length: numberOfPages },
    (_, index) => {
      const start = index * itmsPerPage;
      return followers.slice(start, start + itmsPerPage);
    }
  );
  return paginatedFollowers;
};

export default paginate;
