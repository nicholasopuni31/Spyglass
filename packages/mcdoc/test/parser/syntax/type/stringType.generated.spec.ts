// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { stringType } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../../_suites'

describe('mcdoc stringType', () => {
	for (const content of McdocParserTestSuites['syntax/type'].stringType.content) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(stringType, content))
		})
	}
})