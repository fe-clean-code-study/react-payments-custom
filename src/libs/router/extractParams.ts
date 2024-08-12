const extractParams = (
  path: string,
  segment: string,
): Record<string, string> | null => {
  if (!(path.startsWith('/:') && segment)) {
    return null
  }
  const key = path.replace('/:', '')
  const value = segment.substring(1)

  return { [key]: value }
}

export default extractParams
