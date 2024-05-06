'use client';
import { isoLangs } from "@/utils/language";
import Image from "next/image";
import { useState } from "react";

const SelectLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [isListVisible, setListVisible] = useState(false);
    console.log(isListVisible);
    return (
        <div 
            className="py-3 cursor-pointer text-white flex flex-row gap-[10px] relative"
            onClick={() => {
                if(!isListVisible) setListVisible(true);
            }}
        >
            {
                isListVisible && (
                    <div className="absolute right-0 bottom-0 py-4 px-3 flex flex-col gap-4 max-h-[300px] bg-slate-100 rounded-lg overflow-y-auto">
                        {
                            isoLangs.map(lang => {
                                return <div 
                                    className="text-slate-700 hover:bg-slate-200 px-2 py-1 rounded-md whitespace-nowrap"
                                    onClick={() => {
                                        setCurrentLanguage(lang.code.toUpperCase());
                                        setListVisible(false);
                                    }}
                                >{lang.name}</div>
                            })
                        }
                    </div>
                )
            }
            <Image
                src={'/icons/world.svg'}
                width={20}
                height={20}
                alt="world-icon"
            />
            <span>{currentLanguage}</span>
        </div>
    )
}

export default SelectLanguage;