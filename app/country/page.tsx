import Link from "next/link"


export default function Country(){
    return(
        <div className="mt-2 p-2">
            <h1>Country</h1>
           <p>List of Countries</p>
           <ul>
            <li className=" hover:bg-green-500 hover:text-white p-1"><Link href="country/pakistan">Pakistan</Link></li>
            <li className="hover:bg-blue-500 hover:text-white p-1"><Link href="country/india">India</Link></li>
            <li className="hover:bg-red-500 hover:text-white p-1"><Link href="country/china">China</Link></li>
            <li className="hover:bg-white hover:text-red-500 p-1"><Link href="country/japan">Japan</Link></li>
            <li className="hover:bg-red-500 hover:text-white p-1"><Link href="country/russia">Russia</Link></li>
           </ul>
        </div>
    )
}

