import { socials } from "../constants";
import WindowWrapper from "../hoc/WindowWraper"
import WindowControls from "../components/WindowControls";
import clsx from "clsx";

const Contact = ({ isFullscreen }) => {
    const { width } = isFullscreen;

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2>Contact Me</h2>
            </div>

        <div className={clsx("h-full w-full p-5 space-y-5", isFullscreen && "flex flex-col  items-center text-center")}>
            <img src="/images/me.jpg" alt="Matan" className="w-20 h-20 rounded-full overflow-hidden"/>
            <h3>Let’s Build Something</h3>
            <p>Got a project to ship, a bug to hunt down, or an automation idea? Hit me up.</p>
            <p>matangambash5@gmail.com</p>
            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={icon} alt={text} className="size-5"/>
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;