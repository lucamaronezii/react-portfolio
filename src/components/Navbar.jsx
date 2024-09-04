import logo from '../assets/lucaSteyerLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt="Luca Steyer logo" />
            </div>
            <div className='m-7 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/luca-maronezi-steyer-613704173/" target='_blank'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/lucamaronezii?tab=repositories" target='_blank'>
                    <FaGithub />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5541999613738&text&type=phone_number&app_absent=0" target='_blank'>
                    <FaWhatsapp />
                </a>
                <a href="https://www.instagram.com/luca.steyer/" target='_blank'>
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
