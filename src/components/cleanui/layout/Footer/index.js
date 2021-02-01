import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <a
          href="https://sellpixels.com"
          target="_blank"
          rel="noopener noreferrer"
          className={style.logo}
        >
          NICE VPN
          <span />
        </a>
        <br />
        <p className="mb-0">
          Copyright © 2017-2021 NICE VPN 
        </p>
      </div>
    </div>
  )
}

export default Footer
