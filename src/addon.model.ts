export interface IAddon {
	package: string
	name: string
	path?: string
	config?: any
	setupConfig?: any[]
	banner?: string

	description: string
	logo: string
	author: string
	version: string

	tags?: Array<{ id: string }>,
	category?: string,

	color?: string,

	enabled: boolean,
	installed: boolean
	installing: boolean

	git?: string,

	readme?: string,
	changelog?: string,

	published: any
}