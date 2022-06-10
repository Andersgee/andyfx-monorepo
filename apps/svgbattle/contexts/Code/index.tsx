import React, { useState, createContext, useContext, useEffect } from "react";
import { sanitize } from "./utils";

const placeholder = `<rect x="24" y="24" width="10" height="10" fill="#00c"/>
<circle cx="24" cy="24" r="10" fill="#00c"/>`;

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  sanitizedCode: string;
  percent: number;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
  size: [number, number];
  setSize: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const defaultValue: Props = {
  code: "",
  setCode: () => {},
  sanitizedCode: "",
  percent: 0,
  setPercent: () => {},
  size: [240, 240],
  setSize: () => {},
};

const CodeContext = createContext(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

export function CodeProvider({ children }: ProviderProps) {
  const [code, setCode] = useState(defaultValue.code);
  const [sanitizedCode, setSanitizedCode] = useState(defaultValue.sanitizedCode);
  const [percent, setPercent] = useState(defaultValue.percent);
  const [size, setSize] = useState(defaultValue.size);

  useEffect(() => {
    const width = size[0];
    const height = size[1];
    const clean = sanitize(
      `<svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${code}</svg>`
    );
    //console.log("clean:", clean);
    if (clean) {
      setSanitizedCode(clean);
    }
  }, [code, size]);

  return (
    <CodeContext.Provider
      value={{
        code,
        size,
        setSize,
        setCode,
        sanitizedCode,
        percent,
        setPercent,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
}

export const useCodeContext = () => useContext(CodeContext);
