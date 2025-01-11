export const fetchFromApi = async () => {
  const searchQueries = [];
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyBiUhOTu-pPGwWTboPY9pmpxkErTDZAR_Y&maxResults=40`
    );
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    const data = await response.json();
    const books = data.items.map((item: any) => ({
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || ["Unknown Author"],
      pageCount: item.volumeInfo.pageCount || "NA",
      image: item.volumeInfo.imageLinks
        ? item.volumeInfo.imageLinks.thumbnail
        : "No image found",
      description: item.volumeInfo.description || "No description found",
    }));
    return books || [];
  } catch (error) {
    console.error("Error fetching books from Google Books:", error);
    return [];
  }
};
