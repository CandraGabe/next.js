import TechCard from "./TechCard";

export default function Tech() {
    return (
        <>
        <div className="bg-slate-800 w-screen h-[300px] p-8">
            <h1 className="text-white text-4xl font-bold mb-4">
                Tech
            </h1>
            <div className="w-32 border-2 mb-1"/>
            <div className="flex h-100 justify-center items-center w-full">
                <TechCard imageURL="/img/Android.png" alt="Android" techStack=""/>
                <TechCard imageURL="/img/JS.png" alt="JavaScript" techStack=""/>
                <TechCard imageURL="/img/Pyhton.png" alt="Pyhton" techStack=""/>
            </div>
        </div>
        </>
    )
}