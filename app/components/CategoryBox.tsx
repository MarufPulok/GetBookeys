"use client";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export default function CategoryBox({
  icon: Icon,
  label,
  selected,
}: CategoryBoxProps) {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
        
    }, []);
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-500 transition cursor-pointer
    ${
      selected
        ? "border-b-neutral-800 text-neutral-800"
        : "border-transparent text-neutral-500"
    }

    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
