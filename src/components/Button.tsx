"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";

const Button = ({
  children,
  size = "medium",
  prefixIconPath,
  suffixIconPath,
  className = "",
  onClick,
  suffixIconClass,
}: {
  children: string;
  size?: "small" | "medium" | "large" | "xlarge";
  prefixIconPath?: string;
  suffixIconPath?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  suffixIconClass?: string;
}) => {
  const [buttonStyle, setButtonStyle] = useState({
    button:
      "p-3 border-2 rounded-lg border-amber-900 box-content flex flex-row items-center justify-center flex-none",
    inner: "whitespace-nowrap font-medium group-hover:!text-slate-900",
  });

  useEffect(() => {
    var style = {
      button:
        "border-2 rounded-lg border-amber-900 box-content flex flex-row items-center justify-center flex-none",
      inner: "whitespace-nowrap font-medium group-hover:!text-slate-900",
    };
    var customizationStyle = { button: "p-3", inner: "px-4 text-base" };

    switch (size) {
      case "small":
        customizationStyle = { button: "px-3 py-2", inner: "px-2 text-sm" };
        break;
      case "medium":
        customizationStyle = { button: "p-3", inner: "px-4 text-base" };
        break;
      case "large":
        customizationStyle = { button: "p-4", inner: "px-4 text-xl" };
        break;
      case "xlarge":
        customizationStyle = { button: "px-6 py-5", inner: "px-6 text-2xl" };
        break;
      default:
        customizationStyle = { button: "p-3", inner: "px-4 text-base" };
        break;
    }

    style.button = `${customizationStyle.button} ${style.button}`;
    style.inner = `${customizationStyle.inner} ${style.inner}`;

    setButtonStyle(style);
  }, [size]);

  return (
    <button className={`${buttonStyle.button} ${className}`} onClick={onClick}>
      {prefixIconPath && (
        <Image
          src={prefixIconPath}
          width={24}
          height={24}
          alt={
            prefixIconPath
              .split("/")
              [prefixIconPath.split("/").length - 1].split(".")[0]
          }
        />
      )}
      <div className={buttonStyle.inner}>{children}</div>
      {suffixIconPath && (
        <Image
          className={suffixIconClass}
          src={suffixIconPath}
          width={24}
          height={24}
          alt={
            suffixIconPath
              .split("/")
              [suffixIconPath.split("/").length - 1].split(".")[0]
          }
        />
      )}
    </button>
  );
};

export default Button;
