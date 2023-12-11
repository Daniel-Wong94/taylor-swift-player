type SpanDetails = {
  char: string;
  rotation: string;
  delimiter: string;
};

export const createEmblemSpans = (emblem: string, delimiter: string = "•") => {
  const spans: SpanDetails[] = [];

  const emblemWithDelimiter: string =
    emblem.trim().replaceAll(" ", delimiter) + delimiter;
  const degVal = 90 / (emblem.length / 4);

  emblemWithDelimiter.split("").forEach((char, idx) => {
    const rotation = `rotate(${180 - degVal * idx}deg)`;

    spans.push({ char, rotation, delimiter });
  });

  return spans;
};
