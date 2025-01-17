import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveLink } from 'entities/model'
import { TActiveLinkSliceStore } from 'entities/model/types'
import { MenuItem } from '../model/menu'

import styles from './Header.module.scss'

interface Props {
	items: MenuItem[]
}

const Header: React.FC<Props> = ({ items }) => {
	const dispatch = useDispatch()

	const activeIndex = useSelector(
		(state: TActiveLinkSliceStore) => state.activeLink.activeId
	)

	const handleLinkClick = (id: number) => {
		dispatch(setActiveLink(id))
	}

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				{items.map(({ link, text }: MenuItem, index: number) => (
					<a
						key={index}
						href={link}
						className={`${styles.link} ${
							activeIndex === index ? styles.activeLink : ''
						}`}
						aria-label={text}
						onClick={() => handleLinkClick(index)}
					>
						{text}
					</a>
				))}
			</nav>
		</header>
	)
}

export default Header
