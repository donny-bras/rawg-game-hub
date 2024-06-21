const getCroppedImageUrl = (url: string) => {
  const target = "/media/";
  return url.replace(target, "/media/crop/600/400/");
};

export default getCroppedImageUrl;
