// source: https://en.wikipedia.org/wiki/Geomantic_figures
export type Element
  = 'Fire'
  | 'Air'
  | 'Water'
  | 'Earth'

export interface Figure {
  name: string
  translation: string
  meaning: string
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  rulingElement: Record<'geomantic' | 'astrological', Element>
  stable?: boolean
  mobile?: boolean
  exiting?: boolean
  entering?: boolean
  impartial?: boolean
  partial?: boolean
  planets: string[]
  sign: string
  intelligences: string[]
  spirits: string[]
  deities: string[]
  angels: string[]
  bodyParts: string[]
}

export const Figures: Figure[] = [
  {
    name: 'Via',
    translation: 'The Way',
    meaning: 'Bad in most things, but good concerning roads, travels, or journeys.',
    value: 15,
    rulingElement: {
      geomantic: 'Water',
      astrological: 'Water'
    },
    mobile: true,
    exiting: true,
    entering: true,
    impartial: true,
    planets: ['Moon (Nocturnal)'],
    sign: 'Cancer',
    intelligences: ['Chashmodai', 'Malkah be-Tarshishim ve-ad Ruachoth Shechalim'],
    spirits: ['Shad Barshemoth ha-Shartathan'],
    deities: ['Diana', 'Mercurius'],
    angels: ['Gabriel', 'Muriel'],
    bodyParts: ['Stomach']
  },
  {
    name: 'Cauda Draconis',
    translation: 'The Tail of the Dragon',
    meaning: 'Very bad in most situations, but good for endings or completing things. Brings good with evil, and evil with good.',
    value: 7,
    rulingElement: {
      geomantic: 'Fire',
      astrological: 'Fire'
    },
    mobile: true,
    exiting: true,
    partial: true,
    planets: ['South Lunar Node (Nocturnal)', 'Saturn', 'Mars'],
    sign: 'Virgo',
    intelligences: ['Agiel', 'Graphiel'],
    spirits: ['Zazel', 'Bartzabel'],
    deities: ['Mavors', 'Saeturnus', 'Athena'],
    angels: ['Casiel', 'Samael', 'Malchidael'],
    bodyParts: ['Left Arm']
  },
  {
    name: 'Puer',
    translation: 'The Boy',
    meaning: 'Bad in most situations, but good for love and war.',
    value: 13,
    rulingElement: {
      geomantic: 'Air',
      astrological: 'Fire'
    },
    mobile: true,
    exiting: true,
    partial: true,
    planets: ['Mars (Diurnal)'],
    sign: 'Aries',
    intelligences: ['Graphiel'],
    spirits: ['Bartzabel'],
    deities: ['Mavors', 'Athena'],
    angels: ['Samael', 'Malchidael'],
    bodyParts: ['Head']
  },
  {
    name: 'Fortuna Minor',
    translation: 'The Lesser Fortune',
    meaning: 'A weakly positive outcome in nearly all questions. Transient success that is dependent on outside help. Favors situations that resolve quickly and do not need to be sustained.',
    value: 3,
    rulingElement: {
      geomantic: 'Fire',
      astrological: 'Fire'
    },
    mobile: true,
    exiting: true,
    impartial: true,
    planets: ['Sun (Nocturnal)'],
    sign: 'Leo',
    intelligences: ['Nakhiel'],
    spirits: ['Sorath'],
    deities: ['Apollo', 'Jupiter'],
    angels: ['Michael', 'Verchiel'],
    bodyParts: ['Spine']
  },
  {
    name: 'Puella',
    translation: 'The Girl',
    meaning: 'Peace and Passivity, generally positive in all questions where this is favorable. Requires outside help to be resolved.',
    value: 11,
    rulingElement: {
      geomantic: 'Water',
      astrological: 'Air'
    },
    stable: true,
    entering: true,
    partial: true,
    planets: ['Venus (Diurnal)'],
    sign: 'Libra',
    intelligences: ['Hagiel'],
    spirits: ['Kedemel'],
    deities: ['Venus', 'Vulcanus'],
    angels: ['Anael', 'Zuriel'],
    bodyParts: ['Kidneys', 'Lower Back', 'Buttocks', 'Skin']
  },
  {
    name: 'Amissio',
    translation: 'Loss',
    meaning: 'Bad in all situations except for love, or where loss is desired. Resolution is outside your grasp.',
    value: 5,
    rulingElement: {
      geomantic: 'Fire',
      astrological: 'Earth'
    },
    mobile: true,
    exiting: true,
    impartial: true,
    planets: ['Venus (Nocturnal)'],
    sign: 'Taurus',
    intelligences: ['Hagiel'],
    spirits: ['Kedemel'],
    deities: ['Venus'],
    angels: ['Anael', 'Asmodel'],
    bodyParts: ['Neck', 'Throat']
  },
  {
    name: 'Carcer',
    translation: 'The Prison',
    meaning: 'Denotes delays, setbacks, or bindings. Generally bad, except in questions involving stability or security.',
    value: 9,
    rulingElement: {
      geomantic: 'Earth',
      astrological: 'Earth'
    },
    stable: true,
    entering: true,
    exiting: true,
    impartial: true,
    planets: ['Saturn (Nocturnal)'],
    sign: 'Capricorn',
    intelligences: ['Agiel'],
    spirits: ['Zazel'],
    deities: ['Saeturnus', 'Vesta'],
    angels: ['Cassiel', 'Hanael'],
    bodyParts: ['Knees', 'Skeleton']
  },
  {
    name: 'Laetitia',
    translation: 'Joy',
    meaning: 'Positive for nearly all questions, representing fast resolution and construction.',
    value: 1,
    rulingElement: {
      geomantic: 'Fire',
      astrological: 'Water'
    },
    mobile: true,
    exiting: true,
    partial: true,
    planets: ['Jupiter (Nocturnal)'],
    sign: 'Pisces',
    intelligences: ['Iophiel'],
    spirits: ['Hismael'],
    deities: ['Jove', 'Neptunus'],
    angels: ['Sachiel', 'Barchiel'],
    bodyParts: ['Feet']
  },
  {
    name: 'Caput Draconis',
    translation: 'The Head of the Dragon',
    meaning: 'Good with good, evil with evil. Good for starting or beginning new things.',
    value: 14,
    rulingElement: {
      geomantic: 'Earth',
      astrological: 'Fire'
    },
    stable: true,
    entering: true,
    partial: true,
    planets: ['North Lunar Node (Diurnal)', 'Jupiter', 'Venus'],
    sign: 'Sagittarius',
    intelligences: ['Iophiel', 'Hagiel'],
    spirits: ['Hismael', 'Kedemel'],
    deities: ['Venus', 'Vulcanus'],
    angels: ['Sachiel', 'Anael', 'Zuriel'],
    bodyParts: ['Right Arm']
  },
  {
    name: 'Conjunctio',
    translation: 'The Conjunction',
    meaning: 'Generally good with good, evil with evil. Favorable with joining or recovering things, especially relationships.',
    value: 6,
    rulingElement: {
      geomantic: 'Air',
      astrological: 'Earth'
    },
    mobile: true,
    entering: true,
    exiting: true,
    impartial: true,
    planets: ['Mercury (Nocturnal)'],
    sign: 'Virgo',
    intelligences: ['Tiriel'],
    spirits: ['Taphthartharath'],
    deities: ['Mercurius', 'Ceres'],
    angels: ['Raphael', 'Hamaliel'],
    bodyParts: ['Intestines', 'Digestive System']
  },
  {
    name: 'Acquisitio',
    translation: 'Gain',
    meaning: 'Good for all situations except where loss is desireable. Something is within ones grasp.',
    value: 10,
    rulingElement: {
      geomantic: 'Air',
      astrological: 'Fire'
    },
    stable: true,
    entering: true,
    impartial: true,
    planets: ['Jupiter (Diurnal)'],
    sign: 'Sagittarius',
    intelligences: ['Iophiel'],
    spirits: ['Hismael'],
    deities: ['Jove', 'Diana'],
    angels: ['Sachiel', 'Adnachiel'],
    bodyParts: ['Hips', 'Thighs']
  },
  {
    name: 'Rubeus',
    translation: 'Red',
    meaning: 'Inversion. Good in all that is evil, and evil in all that is good. Very bad in all situations.',
    value: 2,
    rulingElement: {
      geomantic: 'Air',
      astrological: 'Water'
    },
    mobile: true,
    exiting: true,
    partial: true,
    planets: ['Mars (Nocturnal)'],
    sign: 'Scorpio',
    intelligences: ['Graphiel'],
    spirits: ['Bartzabel'],
    deities: ['Mavors'],
    angels: ['Samael', 'Barbiel'],
    bodyParts: ['Reproductive System', 'Excratory System', 'Genitals']
  },
  {
    name: 'Fortuna Major',
    translation: 'The Greater Fortune',
    meaning: 'Good in all situations. A figure of stability and long-term success. Also denotes hardship at the outset of the endeavor.',
    value: 12,
    rulingElement: {
      geomantic: 'Earth',
      astrological: 'Fire'
    },
    stable: true,
    entering: true,
    impartial: true,
    planets: ['Sun (Diurnal)'],
    sign: 'Leo',
    intelligences: ['Nakhiel'],
    spirits: ['Sorath'],
    deities: ['Apollo', 'Jupiter'],
    angels: ['Michael', 'Verchiel'],
    bodyParts: ['Heart', 'Chest']
  },
  {
    name: 'Albus',
    translation: 'White',
    meaning: 'Good in most situations, especially in the company of other positive figures, but is weak by itself. Benefits situations where careful planning is needed.',
    value: 4,
    rulingElement: {
      geomantic: 'Water',
      astrological: 'Air'
    },
    stable: true,
    entering: true,
    partial: true,
    planets: ['Mercury (Diurnal)'],
    sign: 'Gemini',
    intelligences: ['Tiriel'],
    spirits: ['Taphthartharath'],
    deities: ['Mercurius', 'Apollo'],
    angels: ['Raphael', 'Ambriel'],
    bodyParts: ['Shoulders', 'Lungs']
  },
  {
    name: 'Tristitia',
    translation: 'Sorrow',
    meaning: 'Unfavourable in almost all questions, usually representing pain and suffering. However, it is favourable in questions dealing with stability, building, or the Earth (agriculture).',
    value: 8,
    rulingElement: {
      geomantic: 'Earth',
      astrological: 'Air'
    },
    stable: true,
    entering: true,
    partial: true,
    planets: ['Saturn (Diurnal)'],
    sign: 'Aquarius',
    intelligences: ['Agiel'],
    spirits: ['Zazel'],
    deities: ['Saeturnus', 'Juno'],
    angels: ['Cassiel', 'Gabriel'],
    bodyParts: ['Ankles', 'Lower Legs']
  },
  {
    name: 'Populus',
    translation: 'The People',
    meaning: 'A neutral figure, good with good, and bad with bad. Can mean that the outcome is based on the people in the situation, or represents a large number of people.',
    value: 0,
    rulingElement: {
      geomantic: 'Water',
      astrological: 'Water'
    },
    stable: true,
    entering: true,
    exiting: true,
    impartial: true,
    planets: ['Moon (Diurnal)'],
    sign: 'Cancer',
    intelligences: ['Chashmodai', 'Malkah be-Tarshishim ve-ad Ruachoth Chechalim'],
    spirits: ['Shad Barshemoth ha-Shartathan'],
    deities: ['Diana', 'Mercurius'],
    angels: ['Gabriel', 'Muriel'],
    bodyParts: ['Breasts', 'Torso']
  }
]
