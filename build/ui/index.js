import prompt from "prompt-sync";
const defaultSites = [
    "https://www.timescale.com",
    "https://docs.timescale.com/timescaledb/latest/",
    "https://www.timescale.com/blog",
    "https://www.timescale.com/forum",
];
const defaultTags = ["h1", "h2", "button", "a", "h3", "h4", "p"];
export function userInput(question, callback) {
    const input = prompt()(question);
    const processedInput = callback(input);
    return processedInput;
}
export function urlsParser(urls) {
    return urls.length > 0 ? urls.split(" ") : defaultSites;
}
export function tagsParser(tags) {
    return tags.length > 0 ? tags.split(" ") : defaultTags;
}
