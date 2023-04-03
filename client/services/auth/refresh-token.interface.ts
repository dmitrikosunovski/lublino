import { RolesEnum } from '@/services/user/interfaces/user.interface'

export interface IRefreshToken {
	username: string
	role: RolesEnum
	accessToken: string
	refreshToken: string
	expiresIn: number
}
