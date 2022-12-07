import { ReactElement, useEffect, useRef } from 'react';

type PageProps = {
  setState: () => void;
  children: ReactElement;
};

export const OutsideClickCloseContainer = ({
  setState,
  children,
}: PageProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleClickOutside = (e: MouseEvent): void => {
    if (!dropdownRef.current?.contains(e.target as Node)) {
      setState();
    }
  };

  return <div ref={dropdownRef}>{children}</div>;
};
