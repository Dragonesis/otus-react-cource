import { preparingParameterString } from './ramdaPureFunctions'
import { parseQs } from './pureFunctions'

test('createQsAdditional', () => {
  expect(preparingParameterString('?page=2')).toBe('page=2')
  expect(preparingParameterString('page=2')).toBe('page=2')
})

test('parseQsAdditional', () => {
  const qs = 'page=2&pageSize=10&total=205&somethingElse=value'

  expect(parseQs(qs)).toStrictEqual({
    page: '2',
    pageSize: '10',
    total: '205',
    somethingElse: 'value',
  })
})
