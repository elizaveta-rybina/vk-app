import React from 'react'
import { NavLink } from 'react-router-dom'

import { MenuItem } from '../model/menu'

import styles from './Header.module.scss'

interface Props {
	items: MenuItem[]
}

const Header: React.FC<Props> = ({ items }) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				{items.map(({ link, text }: MenuItem, index: number) => (
					<NavLink
						key={index}
						to={link}
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.activeLink : ''}`.trim()
						}
						aria-label={text}
					>
						{text}
					</NavLink>
				))}
			</nav>
		</header>
	)
}

export default Header
