import { urlsParser, tagsParser, userInput } from "./ui/index.js";
import { processSites } from './scraper/index.js';
function main() {
    const urls = userInput("Enter site urls to check contrast of or press enter", urlsParser);
    // TODO validate input urls
    const tags = userInput("Enter the tags you would like to check or press enter", tagsParser);
    // TODO validate tags
    processSites(urls, tags);
}
main();
