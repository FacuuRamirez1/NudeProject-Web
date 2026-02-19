"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { Button } from "../ui/button"

const components: { title: string; href: string }[] = [
    {
        title: "View All",
        href: "/products",
    },
    {
        title: "Hoodies & Sweatshirts",
        href: "/products/hoddies_&_sweatshirts",
    },
    {
        title: "Knitwear",
        href: "/products/knitwear",
    },
    {
        title: "Outwear",
        href: "/products/outwear",
    },
    {
        title: "T-shirts",
        href: "/products/t-shirts",
    },
    {
        title: "Shirts & Polos",
        href: "/products/shirts_&_polos",
    },
    {
        title: "Jeans",
        href: "/products/jeans",
    },
    {
        title: "Pants",
        href: "/products/pants",
    },
    {
        title: "Accessories",
        href: "/products/accessories",
    },
]

const MenuList = () => {

    return (
        <NavigationMenu >
            <NavigationMenuList className=" flex gap-4">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96">
                            <ListItem href="/collections/nude-project-x-playboy" title="Nude Project x Playboy" className="border-none">
                                Nude Project x Playboy… this one is personal.
                            </ListItem>
                            <ListItem href={`/collections/big-in-japan`} title="Big In Japan" className="border-none">
                                A campaign that celebrates our conscious ignorance of traditional marketing rules.
                            </ListItem>
                            <ListItem href="/collections/-business-as-unusual" title="Business As Unusual" className="border-none">
                                In a world where brands follow the same route, chasing trends instead of dreams, we decided to take the road less traveled.
                            </ListItem>
                            <ListItem href="/collections" title="All Collections" className="border-none">
                                Look at uor collections.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                    <NavigationMenuTrigger>View All</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    className="border-none"
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >About Us</NavigationMenuTrigger>
                    <NavigationMenuContent className="border-none min-h-[120px] py-4">
                        <NavigationMenuLink asChild className="w-[500px] border-none">
                            <ListItem href="/aboutUs" title="What is Nude Project?" className="border-none">
                                Nude Project ® is a premium streetwear brand founded in a small dorm room by two friends eager to create something different.
                            </ListItem>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/contacts" >Contacts</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

function ListItem({
    title,
    children,
    href,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; className?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild className={className}>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium text-white">{title}</div>
                        <div className="text-gray-300 line-clamp-2">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default MenuList;