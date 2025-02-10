export const getRandomNotificationImage = (): any => {
    const images = [
      require("../assets/temp/white1.png"),
      require("../assets/temp/white2.png"),
      require("../assets/temp/dog.png"),
      require("../assets/temp/nike.png"),
    ];
  
    return images[Math.floor(Math.random() * images.length)];
};