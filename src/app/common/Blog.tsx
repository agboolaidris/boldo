import { Button } from "@ui/Button";
import { BodyText, Title } from "@ui/Text";
import Image from "next/image";
import React from "react";
import { formatDate } from "../../utils/date";

const blogs = [
  {
    category: "Science",
    image: "/lady.svg",
    title: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bing",
    createdAt: "2024-10-15T15:09:37.914372",
    authorProfile: "/harry.svg",
  },
  {
    category: "Science",
    image: "/services/handshake-illustration.svg",
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Chandler Bing",
    createdAt: "2024-10-15T15:09:37.914372",
    authorProfile: "/harry.svg",
  },
  {
    category: "Science",
    image: "/services/office-illustration.svg",
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: "Chandler Bing",
    createdAt: "2024-10-15T15:09:37.914372",
    authorProfile: "/harry.svg",
  },
];

export const Blogs = () => {
  return (
    <div>
      <div className="text-center">
        <BodyText>Our Blog</BodyText>
        <Title>
          Value proposition accelerator product <br /> management venture
        </Title>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-16">
        {blogs.map(
          (
            { author, authorProfile, image, title, category, createdAt },
            idx
          ) => (
            <div key={idx}>
              <div className="relative aspect-video w-full bg-gray-50 rounded-md overflow-hidden">
                <Image src={image} alt={title} fill objectFit="cover" />
              </div>
              <div className="flex gap-2 mt-3">
                <BodyText className="!text-black font-semibold">
                  {category}
                </BodyText>{" "}
                <BodyText>{formatDate(createdAt, "MMMM DD YYYY")}</BodyText>
              </div>
              <BodyText className="text-xl !text-black mt-4">{title}</BodyText>
              <div className="flex gap-4 items-center mt-8">
                <div className="w-10 aspect-square rounded-full relative overflow-hidden bg-gray-50">
                  <Image
                    src={authorProfile}
                    alt={author}
                    fill
                    objectFit="fit"
                  />
                </div>
                <BodyText className="text-black font-medium">{author}</BodyText>
              </div>
            </div>
          )
        )}
      </div>
      <Button
        rounded
        kinds="normal"
        size="lg"
        className="!text-black !border-black mx-auto mt-32"
      >
        Load more
      </Button>
    </div>
  );
};
