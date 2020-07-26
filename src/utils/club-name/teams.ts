import { mapValues } from 'lodash'

import clubs from 'data/clubs.json'
import type { UefaCountry } from 'model/types'
import Team from 'model/team/Club'

type Clubs = {
  [country in UefaCountry]: string[]
}

const mapper = (arr: readonly string[], country: UefaCountry) =>
  arr.map(clubName => new Team(clubName, country))

export default mapValues(clubs as Clubs, mapper)
