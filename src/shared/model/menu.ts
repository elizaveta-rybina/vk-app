export interface MenuItem {
	text: string
	link: string
}

export const headerMenu: MenuItem[] = [
	{ text: 'Все котики', link: '/' },
	{ text: 'Любимые котики', link: '/favorites' },
]
