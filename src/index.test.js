import {sensitiveWords} from '.'

test('replaces blacklisted words with asterisks', () => (
  expect(sensitiveWords('These are sensitive words', ['sensitive'])).toBe('These are ***** words')
))


test('replaces multiple instances of blacklisted words with asterisks', () => (
  expect(sensitiveWords('These are sensitive words. Sensitive words are replaced with asterisks', ['sensitive'])).toBe('These are ***** words. ***** words are replaced with asterisks')
))
