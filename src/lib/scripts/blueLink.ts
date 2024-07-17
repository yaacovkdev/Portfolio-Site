export const blueLink = (href: string, content: string, end: boolean = false): string => {
  return `<a class="blue-link" href=${href}>${content} ${end? "›››" : ""}</a>`;
}