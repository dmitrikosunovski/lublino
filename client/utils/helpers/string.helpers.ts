import qs from 'qs'
import { IUser } from '@/services/user/interfaces/user.interface'

export const mergeNames = (names: any[]) => names.filter((v) => v).join(' ')

export const getUserFullName = (user?: IUser) =>
  user ? mergeNames([user.firstName, user.middleName, user.lastName]) : ''

export const getStringValue = (
  str: string | undefined | null | number,
  char = '-'
) => (str ? str.toString() : char)

export const castToHours = (seconds: number | undefined) => {
  if (!seconds) return '-'

  const hours = seconds / (60 * 60)

  return parseFloat(hours.toFixed(1))
}

export const makeQuery = (query: any, addPredix = true) => {
  return qs.stringify(query, { skipNulls: true, addQueryPrefix: addPredix })
}

export const nullify = (str: string | number | null | undefined) => {
  if (typeof str === 'string') {
    return str.length ? str : null
  }

  return null
}
