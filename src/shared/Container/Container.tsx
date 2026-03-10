import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'shared/Header'

import { headerMenu } from 'shared/model/menu'

import styles from './Container.module.scss'

const Container: React.FC = () => {
	return (
		<div>
			<Header items={headerMenu} />
			<div className={styles.container}>
				<Outlet />
			</div>
		</div>
	)
}

export default Container
