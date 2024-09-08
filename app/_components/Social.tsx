import Link from "next/link";
import {FaGithub,FaLinkedin} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:'https://github.com/Nahima697'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/developpeur-web-nahima-toumi/'},
]
interface SocialProps {
    containerStyles?: string;
    btnStyles?: string;
    iconStyles?: string;
  }

export const Social:React.FC<SocialProps> = ({containerStyles="",iconStyles=""}) => {

    return (
        <div className ={containerStyles}>
        {socials.map((item,index) => {
            return (<Link key ={index} href= {item.path} className={iconStyles}> 
            {item.icon}    
        </Link>
            );
    })}
        </div>
    )
}