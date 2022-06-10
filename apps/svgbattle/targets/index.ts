export interface Target {
  svg: string;
  width: number;
  height: number;
  placeholder: string;
  title: string;
  description: string;
  colors: string[];
}

const target0: Target = {
  title: "Basic shapes",
  description: "This is an introduction. Learn <rect> and <circle>.",
  svg: `<svg width="240px" height="240px" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#aac"/><circle cx="120" cy="120" r="60" fill="#40c"/><rect x="120" y="120" width="60" height="60" fill="#40c"/></svg>`,
  width: 240,
  height: 240,
  colors: ["#aac", "#40c"],
  placeholder: `<rect width="100%" height="100%" fill="#000"/>\n<circle cx="20" cy="20" r="30" fill="#4fc"/>\n<rect x="120" y="120" width="60" height="60" fill="#47c"/>`,
};

const target1: Target = {
  title: "Basic shapes 2",
  description: "Not painting makes image transparent.",
  svg: `<svg width="240px" height="240px" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="120" fill="#40c"/>\n<circle cx="240" cy="240" r="250" fill="#c04"/></svg>`,
  width: 240,
  height: 240,
  colors: ["#40c", "#c04"],
  placeholder: ``,
};

const target2: Target = {
  title: "path line arc",
  description: "path with line and arc.",
  svg: `<svg width="340px" height="140px" viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linejoin="round" fill="none" stroke="#f00" stroke-width="20" d="M 100 100 l 20 20 l 20 -20 a 30 30 1 0 0 60 -60 l 100 0"/>
  </svg>`,
  width: 340,
  height: 140,
  colors: ["#f00"],
  placeholder: ``,
};

export const targets = [target0, target1, target2];
