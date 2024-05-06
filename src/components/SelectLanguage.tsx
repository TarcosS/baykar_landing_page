"use client";
import { isoLangs } from "@/utils/language";
import Image from "next/image";
import { useState } from "react";

const SelectLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isListVisible, setListVisible] = useState(false);
  console.log(isListVisible);
  return (
    <div
      className="relative flex cursor-pointer flex-row gap-[10px] py-3 text-white"
      onClick={() => {
        if (!isListVisible) setListVisible(true);
      }}
    >
      {isListVisible && (
        <div className="absolute bottom-0 right-0 flex max-h-[300px] flex-col gap-4 overflow-y-auto rounded-lg bg-slate-100 px-3 py-4">
          {isoLangs.map((lang) => {
            return (
              <div
                className="whitespace-nowrap rounded-md px-2 py-1 text-slate-700 hover:bg-slate-200"
                onClick={() => {
                  setCurrentLanguage(lang.code.toUpperCase());
                  setListVisible(false);
                }}
              >
                {lang.name}
              </div>
            );
          })}
        </div>
      )}
      <Image src={"/icons/world.svg"} width={20} height={20} alt="world-icon" />
      <span>{currentLanguage}</span>
    </div>
  );
};

export default SelectLanguage;
