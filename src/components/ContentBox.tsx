'use client';

import Image from "next/image";
import Button from "./Button";
import { Ref, useState } from "react";

const ContentBox = ({
  iconPath,
  title,
  text,
  className,
  textClassName,
  iconClassName,
  titleClassName,
  imagePath,
  align,
  buttons,
  refContent,
  author
}: {
  iconPath?: string;
  title?: string;
  text: string;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  imagePath?: string;
  align?: "center" | "left" | "right";
  buttons?: { text: string; iconPath: string }[];
  refContent?: Ref<any>;
  author?: { name: string; role: string; imagePath: string };
}) => {
  const [nonUserSrc, setNonUserSrc] = useState<string | null>(null);
  return (
    <div
      ref={refContent}
      className={`flex flex-col items-center text-slate-900 sm:items-start ${className}`}
    >
      {iconPath && (
        <div className={iconClassName}>
          <Image
            src={iconPath}
            width={64}
            height={title ? 64 : 32}
            alt="icon"
            className="w-auto"
          />
        </div>
      )}

      {imagePath && (
        <Image
          src={imagePath}
          width={1579}
          height={880}
          alt="image"
          className="aspect-auto w-full"
        />
      )}
      <div className={"flex flex-col gap-4 " + (imagePath ? "p-8" : "")}>
        {title && (
          <h1
            className={
              "text-center text-xl font-medium sm:text-left " + titleClassName
            }
          >
            {title}
          </h1>
        )}
        <p className={"text-lg " + textClassName}>{text}</p>
      </div>
      {buttons && (
        <div
          className={
            "grid w-full p-8 pt-0 " +
            (buttons.length % 2 === 0 ? "grid-cols-2" : "grid-cols-1")
          }
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="large"
              className="border-white"
              prefixIconPath={button.iconPath}
            >
              {button.text}
            </Button>
          ))}
        </div>
      )}

      {
        author && (
          <div className="flex flex-row items-center gap-4 pt-4">
            <div className="rounded-full max-h-16 max-w-16 overflow-hidden flex justify-center items-center">
              <Image
                src={nonUserSrc ?? author.imagePath}
                width={64}
                height={64}
                alt="author"
                className=""
                onError={() => {
                  setNonUserSrc('/images/no-user.png');
                }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg">{author.name}</h1>
              <p className="text-base text-slate-600">{author.role}</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ContentBox;
