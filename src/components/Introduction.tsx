import Image from "../../node_modules/next/image";

export default function Introduction(){
    return(
        <>
        <div className="w-screen h-[500px] bg-slate-800 p-20">
             <div className="flex justify-between items-center">
                <div>
                    <div>
                  <p className="text-[#00ADB5] text-2xl font-bold">Mahasiswa Tehnik Informatika</p>
                     <h2 className="text-7xl text-white">Hello , Im</h2>
                     <h2 className="text-7xl text-[#00ADB5] font-bold">Candra Gabe Prasetya Sianturi <br /> キャンドラ・アベ</h2>
                </div>
                        <div>
                                <p className="text-white max-w-lg p-8">Lorem ipsum dolor sit <br></br> amet consectetur adipisicing elit. 
                                    Vitae labore ullam itaque facilis quisquam minus laborum <br></br>laboriosam enim, 
                                    facere totam pariatur sapiente necessitatibus, numquam saepe est eius reiciendis
                                     praesentium odit!
                                     </p>
                        </div>
            </div>
            {/*image*/}
            <div className="relative w-96 h-96">
                <Image 
                src={"/img/download.png"}
                alt="Candra Gabe Prasetya Sianturi"
                fill={true}
                priority={true}  
                className="rounded-3xl object-cover"              
                />
            </div>
        </div>
        </div>
        </>
        
    )
}