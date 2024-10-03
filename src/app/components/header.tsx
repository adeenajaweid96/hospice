import Link from "next/link";
function Header(){
return(
    <header className="flex justify-between bg-slate-100 ">
<div>
    <h2 className="text-1x1 font-bold mt-5 ml-12 text-blue-950">Hospice</h2>
</div>
<nav>
    <ul className="flex gap-x-6 m-5  font-medium text-black">
        <li>
            <Link href="/" className="text-sky-500">Home</Link>
        </li>
        <li>
            <Link href="/about.tsx" className="hover:text-sky-500">About</Link>
        </li>
        <li>
            <Link href="/service" className="hover:text-sky-500">Services</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:text-sky-500">Contact</Link>
        </li>
    </ul>
</nav>

    </header>
    
)
}
export default Header