export default function Header() {
    return(
        <>
        <div className="w-screen p-8 bg-slate-800 flex justify-between items-center">
            <div>
            <p className="font-bold text-white text-2xl ">
                Candra Abe
                </p>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li className="text-white text-lg"> Home </li>
                    <li className="text-white text-lg"> Profil </li>
                    <li className="text-white text-lg"> About </li>
                    <li className="text-white text-lg"> Home </li>
                </ul>
            </div>
        </div>
        </>
    )
}