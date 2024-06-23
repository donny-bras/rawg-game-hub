import noImagePlaceholder from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImagePlaceholder;

  const target = "/media/";
  return url.replace(target, "/media/crop/600/400/");
};

export default getCroppedImageUrl;
