import ArgumentNode from './ArgumentNode'
import LocalCache from './LocalCache'
import ParsingError from './ParsingError'
import { CompletionItem } from 'vscode-languageserver'

/**
 * Represent a parsed line in a function.
 */
export default interface Line {
    /**
     * All parsed argument nodes of the line.
     */
    nodes: ArgumentNode[]
    /**
     * All cache of the line.
     */
    cache?: LocalCache
    /**
     * All errors occured while parsing the line.
     */
    errors?: ParsingError[]
    /**
     * All completions in this line.
     */
    completions?: CompletionItem[]
}
