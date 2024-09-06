import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import { Social } from "./_components/Social";
import { Photo } from "./_components/Photo";



const  Accueil = ()=>  {
  return (
<section className ="h-full" >
  <div className="container mx-auto h-full" >
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <div className="text-center xl:text-left order-2 xl:order-none"> 
        <span className="text-xl"> Développeuse Web </span>
        <h1 className ="h1 mb-6 text-white font-geist-sans">Hello, je m'appelle<br />
          <span className ="text-primary font-nunito-sans">Nahima Toumi</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80 font-mono">
          Je suis une développeuse en reconversion passionnée par les technologies fullstack. J'adore expérimenter et explorer de nouvelles solutions pour créer des applications innovantes.
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button variant ="outline" size="lg" className="uppercase flex items-center gap-2 text-primary border-primary">
          <span className="text-primary"> Mon CV </span>
          <FiDownload className ="text-xl text-primary"/>
        </Button>
        <div className="text-white mb-8 xl:mb-0">
          <Social containerStyles ="flex gap-6"  iconStyles ="w-9 h-9 border border-primary rounded-md flex justify-center items-center
          text-primary text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/> </div>   
      </div>  
      </div>  
      <div className ="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  </div>
</section>
  );
}
export default Accueil;