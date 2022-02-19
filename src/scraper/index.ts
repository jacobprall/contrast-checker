import * as cheerio from "cheerio";
import { CheerioAPI } from "cheerio";
import jsdom from "jsdom";
import fetch from "node-fetch";

type urlTuple = [string, jsdom.JSDOM];
const { JSDOM } = jsdom;

async function getSite(url: string): Promise<urlTuple> {
  const res = await fetch(url);
  const body = await res.text();
  const dom = new JSDOM(body);
  return [url, dom];
}

async function getSites(urls: string[]) {
  const responses = urls.map(async (url) => {
    return await getSite(url);
  });
  return Promise.all(responses);
}

export async function processSites(urls: string[], tags: string[]) {
  const sites = await getSites(urls);
  const allElements = sites.reduce((acc, [url, site]) => {
    console.log(url);
    console.log(site);
    const eles = tags.map((tag) => site.window.document.querySelectorAll(tag));
    const colorMap = eles.reduce((acc, ele) => {
      ele.forEach((e) => {
        acc[e.className] = site.window.getComputedStyle(e).color;
      });
      return acc;
    }, {});
    acc[url] = colorMap;
    return acc;
  }, {});
  console.log(allElements);
}
