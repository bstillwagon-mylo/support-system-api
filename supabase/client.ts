import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

const url = process.env.SUPABASE_URL || ''
const key = process.env.SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(
  url,
  key
)