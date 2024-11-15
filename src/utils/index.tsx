export const renderText = (text: string): (string | JSX.Element)[] => {
  const parts = text.split(/(<strong>.*?<\/strong>|<span>.*?<\/span>|<a.*?>.*?<\/a>)/g);

  return parts.map((part, index) => {
    const strongMatch = part.match(/<strong>(.*?)<\/strong>/);
    const spanMatch = part.match(/<span>(.*?)<\/span>/);
    const aMatch = part.match(/<a.*?href="(.*?)".*?>(.*?)<\/a>/);

    if (strongMatch) {
      const [, content] = strongMatch;
      return <strong key={index}>{content}</strong>;
    }

    if (spanMatch) {
      const [, content] = spanMatch;
      return <span key={index}>{content}</span>;
    }

    if (aMatch) {
      const [, href, content] = aMatch;
      return <a key={index} href={href}>{content}</a>;
    }

    return part;
  });
};

export const splitArrayIntoGroups = (array: any[], numGroups: number): any[][] => {
  if (numGroups < 1) return [];

  const groups: any[][] = Array.from({ length: numGroups }, () => []);
  const itemsPerGroup = Math.ceil(array.length / numGroups);

  for (let i = 0; i < numGroups; i++) {
    groups[i] = array.slice(i * itemsPerGroup, (i + 1) * itemsPerGroup);
  }

  return groups;
};