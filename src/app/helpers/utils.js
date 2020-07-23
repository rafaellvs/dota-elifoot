import { addGroup } from 'app/redux/actions/league'

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

// -------------
// team related
export const getPlayerImage = id =>
  `https://www.opendota.com/assets/images/dota2/players/${id}.png`

export const getPlayerDefaultPortrait = () =>
  'https://www.opendota.com/assets/images/dota2/players/portrait.png'

// -------------
// league related
export const generateGroupMatches = teams => {
  const matches = []
  let id = 0

  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push(
        {
          id: id++,
          team1: teams[i],
          team2: teams[j],
          team1Score: 0,
          team2Score: 0,
        }
      )
    }
  }

  return matches
}

export const generateLeagueGroupStage = (dispatch, teams) => {
  const teamCopy = [...teams]
  const groupSize = teamCopy.length >= 16 ? 8 : 4
  let groupTeams = []
  let groupLetter = String.fromCharCode(64)

  while (teamCopy.length) {
    const rng = Math.floor(Math.random() * teamCopy.length)
    groupTeams.push(teamCopy[rng])
    teamCopy.splice(rng, 1)

    if (teamCopy.length % groupSize === 0) {
      const groupMatches = generateGroupMatches(groupTeams)
      groupLetter = String.fromCharCode(groupLetter.charCodeAt() + 1)

      dispatch(addGroup(
        {
          name: groupLetter,
          teams: groupTeams,
          matches: groupMatches,
        }
      ))

      groupTeams = []
    }
  }
}

// this generates a matrix sizexsize in the following structure (for size = 4):
//  [ --  n0  n1  n2 ]
//  [ n0  --  n3  n4 ]
//  [ n1  n3  --  n5 ]
//  [ n2  n4  n5  -- ]
//
// this is used for populating the group stage matches crosstable
// n is the index of the match (in group.matches array) that has to be rendered in its cell
// example crosstable at https://liquipedia.net/dota2/The_International/2019/Group_Stage
export const generateMatrixMatchesIndex = size => {
  const matrix = []
  let content = 0
  let temp = []

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      i === j
        ? temp.push('--')
        : i < j
          ? temp.push(content++)
          : temp.push(matrix[j][i])
    }

    matrix.push(temp)
    temp = []
  }

  return matrix
}
