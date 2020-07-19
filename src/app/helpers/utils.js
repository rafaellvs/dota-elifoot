import heroes from 'app/helpers/constants/heroes'

// TODO: split this file
// -------------
// js misc
export const isEmpty = obj =>
  !(Object.keys(obj).length > 0)

export const capitalizeString = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

// -------------
// hero related
export const getHeroId = name =>
  name && heroes.find(hero => hero.localized_name === name).id

export const getHeroName = id =>
  heroes.find(hero => hero.id === parseInt(id)).name

export const getHeroLocalizedName = id =>
  heroes.find(hero => hero.id === parseInt(id)).localized_name

export const getHeroImage = id =>
  `https://api.opendota.com/apps/dota2/images/heroes/${getHeroName(id)}_sb.png`

export const getHeroIcon = id =>
  `https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${getHeroName(id)}_icon.png`

// -------------
// match related
export const getMatchTime = tick => {
  const duration = tick * 30

  return duration % 60
    ? `${Math.floor(duration / 60).toString().padStart(2, 0)}:30`
    : `${(duration / 60).toString().padStart(2, 0)}:00`
}

export const formatNumber = num => {
  // formats like 1100 to 1.1k
  if (num < 1000) return num

  const lastTwoDeleted = num.toString().slice(0, -2)
  const formatted = `${lastTwoDeleted.slice(0, -1)}.${lastTwoDeleted.slice(-1)}k`

  return formatted
}

// team related
export const getPlayerImage = id =>
  `https://www.opendota.com/assets/images/dota2/players/${id}.png`

export const getPlayerDefaultPortrait = () =>
  'https://www.opendota.com/assets/images/dota2/players/portrait.png'
