import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Social from './../../models/social'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const Socials: React.FC<{ list: Social[] }> = props => {
    const icons: { [key: string]: any } = {
        github: faGithub,
        linkedin: faLinkedin,
    }

    return (
        <ul className="socials">
            {props.list.map((social: Social) => (
                <li key={social.service}>
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        <span className="ico-circle">
                            <FontAwesomeIcon icon={icons[social.service] as IconProp}/>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
