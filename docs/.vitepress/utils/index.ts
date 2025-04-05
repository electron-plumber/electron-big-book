type ParsedValue = string | number | boolean | null
type ParsedObject = Record<string, ParsedValue>

export function parseEqualsObject(input: string): ParsedObject {
  const result: ParsedObject = {}

  // Remove the opening and closing braces and spaces
  const trimmed = input.trim().replace(/^\{|\}$/g, '')
  if (!trimmed) return result

  const pairs = trimmed.split(',')

  for (const pair of pairs) {
    const [rawKey, rawValue] = pair.split('=')

    if (!rawKey || !rawValue) continue

    const key = rawKey.trim()
    const value = rawValue.trim()
    result[key] = parseValue(value)
  }

  return result
}


function parseValue(value: string): ParsedValue {
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === 'null') return null
  if (!isNaN(Number(value))) return Number(value)
  return value
}
