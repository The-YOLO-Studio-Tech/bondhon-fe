const isNumberOrNull = (x: string | null) => (x ? parseInt(x) : null);
export default isNumberOrNull;
