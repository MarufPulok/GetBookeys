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

  // category search, update url
  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-rose-500 transition cursor-pointer
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-rose-500" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
