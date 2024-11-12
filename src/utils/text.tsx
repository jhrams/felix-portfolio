export const renderText = (text: string): (string | JSX.Element)[] => {
  const parts = text.split(/(<strong>.*?<\/strong>|<span>.*?<\/span>)/g);

  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      return <strong key={index}>{part.slice(8, -9)}</strong>;
    }

    if (part.startsWith('<span>') && part.endsWith('</span>')) {
      return <span key={index}>{part.slice(6, -7)}</span>;
    }

    return part;
  });
};

// export const renderText = (text: string): (string | JSX.Element)[] => {
//   const parts = text.split(/(<strong.*?>.*?<\/strong>|<span.*?>.*?<\/span>)/g);

//   return parts.map((part, index) => {
//     const strongMatch = part.match(/<strong.*?class="(.*?)".*?>(.*?)<\/strong>/) || part.match(/<strong.*?>(.*?)<\/strong>/);
//     const spanMatch = part.match(/<span.*?class="(.*?)".*?>(.*?)<\/span>/) || part.match(/<span.*?>(.*?)<\/span>/);

//     if (strongMatch) {
//       const [, className, content] = strongMatch.length === 3 ? strongMatch : [null, '', strongMatch[1]];
//       return <strong key={index} className={className}>{content}</strong>;
//     }

//     if (spanMatch) {
//       const [, className, content] = spanMatch.length === 3 ? spanMatch : [null, '', spanMatch[1]];
//       return <span key={index} className={className}>{content}</span>;
//     }

//     return part;
//   });
// };