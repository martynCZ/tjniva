import React from 'react'
import SocialLink from '../SocialLink/SocialLink';
import { FaMapMarkerAlt, FaFileAlt, FaDatabase, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Kontakt = () => {
  const kontaktData = [
    {
        id: 0,
        label: 'Kujavská 116, Hladké Životice 742 47',
        icon: <FaMapMarkerAlt />,
    },
    {
        id: 1,
        label: 'IČO: 49590715',
        icon: <FaFileAlt />,
    },
    {
        id: 2,
        label: 'ISDS: debxpin',
        icon: <FaDatabase />,
    },
    {
        id: 3,
        label: 'tjnivahladkezivotice',
        icon: <FaEnvelope />,
    },
    {
        id: 4,
        label: 'Facebook',
        icon: <FaFacebookF />,
    },
    {
        id: 5,
        label: 'Instagram',
        icon: <FaInstagram />,
    },
    {
        id: 6,
        label: 'Martin Mikunda 605 924 156',
        icon: <FaPhoneAlt />,
    },
    {
        id: 7,
        label: 'Petr Balhárek 607 672 026',
        icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div className='flex lg:flex-row flex-col'>
      <div className='flex-1 text-2xl leading-[50px]'>
        {kontaktData.slice(0, 4).map(({ id, label, icon }) => (
            <SocialLink key={id} label={label} icon={icon}/>
        ))}
      </div>
      <div className='flex-1 text-2xl leading-[50px]'>
        {kontaktData.slice(4, 8).map(({ id, label, icon }) => (
            <SocialLink key={id} label={label} icon={icon}/>
        ))}
      </div>
    </div>
  )
}

export default Kontakt