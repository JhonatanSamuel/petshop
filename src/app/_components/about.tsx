import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"




export function About() {
    return (

        <section className="bg-[#FDF6EC] py-16" >

            <div className="container mx-auto px-4 ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 

                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden" > 
                            <Image 
                                src={about1Img}
                                alt="Foto cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority 

                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white" > 
                            <Image 
                                src={about2Img}
                                alt="Foto gato"
                                fill
                                quality={100}
                                
                                priority 
                                data-aos="flip-left"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">SOBRE</h2>
                        
                        <p>
                        O lugar perfeiro para você encontrar tudo o que precisa para o seu pet. Cuidar de quem você ama é a nossa missão. 
                        Oferecemos produtos de qualidade e serviços especializados para o seu melhor amigo. Temos a missão de deixar seu pet 
                        mais saudável, pois cuidaremos dele com muito amor e carinho. Venha nos conhecer! 
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2015
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é a nossa prioridade.
                            </li>

                        </ul>

                        <div className="flex gap-2">

                            <a href="#" className="bg-[#25D366] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"  data-aos="flip-up" data-aos-delay="400">
                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                Contato via WhatsApp
                            </a>

                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md" >
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da loja
                            </a>

                        </div>

                    </div>

                </div> 


                


            </div>

        </section>

    )
}