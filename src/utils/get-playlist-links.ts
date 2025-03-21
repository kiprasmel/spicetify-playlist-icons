export default function getPlaylistAnchors(): Promise<HTMLAnchorElement[]> {
   return new Promise(resolve => {
      const elementExists = setInterval(() => {
         const playLists = document.querySelectorAll<HTMLAnchorElement>('#spicetify-playlist-list li a');

         if (playLists.length > 0) {
            clearInterval(elementExists);
            resolve(Array.from(playLists));
         }
      }, 100);
   });
}

export function getElement(selector: string): Promise<Element> {
   let tries = 0;

   return new Promise((resolve, reject) => {
      const elementExists = setInterval(() => {
         const element = document.querySelector(selector);

         if (element) {
            clearInterval(elementExists);
            resolve(element);
         } else {
            tries++;
            if (tries > 20) {
               clearInterval(elementExists);
               reject(`Element ${selector} not found after 20 tries`);
            }
         }
      }, 100);
   });
}
