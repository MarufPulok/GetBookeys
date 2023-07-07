'use client';
import React from 'react'
import Container from '../Container';
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from '../CategoryBox';
import { useSearchParams, usePathname } from 'next/navigation';

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
];

export default function Categories() {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  return (
    <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
    {categories.map((item) => (
        <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
        />
    ))}
        </div>
    </Container>
  )
}
