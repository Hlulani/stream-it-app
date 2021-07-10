
import { HomeIcon} from '@heroicons/react/outline'
import { prototype } from 'form-data';
import Image from "next/image"
import logo from "../img/1.jpg"
import HeaderItems from "./HeaderItems";
import Searchbox from './Searchbox';
import propTypes from 'prop-types'

export default function Header() {

    Header.propTypes = {
        searchField: e.target.value
    }

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <Searchbox placeholder="SEARCH" onChange={(e) => console.log(e.target.value)}/>
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
