import Dexie from 'dexie'

const db = new Dexie('DeeMemoryDB')
db.version(1).stores({ games: '++id', characters: '++id' })
db.version(2).stores({ games: '++id', characters: '++id', races: '++id' })
db.version(3).stores({
  games: '++id',
  characters: '++id',
  races: '++id',
  socialClasses: '++id',
  minorAbilities: '++id',
})

export default db
