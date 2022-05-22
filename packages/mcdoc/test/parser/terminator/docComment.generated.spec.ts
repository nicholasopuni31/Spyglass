// This file is generated by `_generate.ts`. Do not modify by hand.
import { showWhitespaceGlyph, testParser } from '@spyglassmc/core/test-out/utils'
import { describe, it } from 'mocha'
import snapshot from 'snap-shot-it'
import { docComment } from '@spyglassmc/mcdoc/lib/parser'
import { McdocParserTestSuites } from '../_suites'

describe('mcdoc docComment', () => {
	for (const content of McdocParserTestSuites['terminator'].docComment.content) {
		it(`Parse "${showWhitespaceGlyph(content)}"`, () => {
			snapshot(testParser(docComment, content))
		})
	}
})