export function assetUrl(source:string){if(source.startsWith('/assets/'))return new URL(source.slice(1),new URL('./',document.baseURI)).href;return source;}
