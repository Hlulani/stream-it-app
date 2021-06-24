
import { HomeIcon, SearchIcon } from '@heroicons/react/outline'
import Image from "next/image"
import logo from "../img/1.jpg"
import HeaderItems from "./HeaderItems";

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <HeaderItems title="SEARCH" Icon={SearchIcon} />
            </div>
            <Image
                className="object-contain"
                src={logo}
                width={200}
                height={50}
            />
        </header>
    )
}
