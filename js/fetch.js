import { img } from "./selectors";
import defaultImg from "./../default-image.jpg";

let imgSrc;

export const getRandomImage = async () => {
  await fetch(
    "https://api.unsplash.com/photos/random/?" +
      new URLSearchParams({
        featured: true,
        collections: "2292047, 3822610",
      }),
    {
      headers: {
        Authorization: `Client-ID ${process.env.API_KEY}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      imgSrc = data.urls.regular;
      img.style.background = `url("${imgSrc}")`;
    })
    .catch((error) => {
      // if error use a default image
      img.style.background = `url("${defaultImg}")`;
      throw new Error(error);
    });
};
