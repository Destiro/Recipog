/**
 * If a title is too long, shorten it and add "..."
 * Used when creating recipes for the daily meal planner.
 *
 * @param word
 * @returns {string|*}
 * @constructor
 */
export default function ShortenWords(word) {
    if(word.length <= 45){ return word; }

    var newWord = word.substr(0, 30);
    newWord += "...";
    return newWord;
}
