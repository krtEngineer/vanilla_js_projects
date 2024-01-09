const getURL = () => {
  let width = +sessionStorage.getItem("width");
  let limit = 0;
  if (width < 500) {
    limit = 5;
  } else if (width < 768) {
    limit = 10;
  } else {
    limit = 20;
  }
  /**
   * list=search - perform a full text search
   * srsearch="inputValue" - search for page titles or content matching  this value.
   * srlimit=20 How many total pages to return.
   * format=json json response
   * "origin=*" fix cors errors
   */
  return `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=${limit}&format=json&origin=*&srsearch=`;
};

export default getURL;
