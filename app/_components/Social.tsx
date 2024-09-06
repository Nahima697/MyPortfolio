import Link from "next/link";
import {FaGithub,FaLinkedin} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path:'https://github.com/Nahima697'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/developpeur-web-nahima-toumi/'},
]

export const Social = ({containerStyles,iconStyles}) => {

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