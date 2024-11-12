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