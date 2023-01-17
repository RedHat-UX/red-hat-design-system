export type Seconds = (number | null | undefined);
export type TimeString = (string | null | undefined);

/**
 * formats time in seconds as `mm:ss.ms` string
 */
export const getFormattedTime = (seconds:Seconds):string => {
  return seconds ? `${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}` : '';
};

/**
 * gets seconds from a stirng formatted as `mm:ss.ms`
 */
export const getSeconds = (str:TimeString):Seconds => {
  if (!str) { return undefined; }
  const hhTimeString = str.match(/(\d\d:)+\d\d(\.\d+)?/) || [];
  const msssmmhh = hhTimeString[0]?.split(':').reverse();
  return !msssmmhh ? undefined : parseFloat(msssmmhh[0] || '0') + parseFloat(msssmmhh[1] || '0') * 60 + parseFloat(msssmmhh[2] || '0') * 60;
};
