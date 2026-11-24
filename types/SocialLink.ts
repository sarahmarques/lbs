import { Image } from "@customTypes/image";

export type SocialLink = {
  fields: {
    name: string;
    lightIcon: Image;
    darkIcon: Image;
    shareLink: string;
  };
};
