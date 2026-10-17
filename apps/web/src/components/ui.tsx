import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import { es } from '../locales/es';

const paths: Record<string, string> = {
  spark: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z',
  arrow: 'M4 12h16m-6-6 6 6-6 6', play: 'm8 4 12 8-12 8Z',
  book: 'M12 5v16M12 5C8 2 4 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-4-1-7-2-10 1Z',
  game: 'M7 7h10c5 0 7 13 3 13l-5-4H9l-5 4C0 20 2 7 7 7Zm0 3v6m-3-3h6m6-1h.01m3 3h.01',
  link: 'm10 14 4-4m-6 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 1 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0',
  trophy: 'M7 3h10v7a5 5 0 0 1-10 0Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-4 0h8',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-4M13 3a4 4 0 0 1 0 8M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  edit: 'm15 4 5 5M4 15 16 3a3 3 0 0 1 5 5L9 20l-6 1Z', check: 'm5 12 4 4L20 5',
  list: 'M4 6h16M4 12h16M4 18h16', home: 'm3 11 9-8 9 8m-16-2v12h14V9M9 21v-7h6v7',
  plus: 'M12 4v16M4 12h16', clock: 'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM9 2h6l1 4 4 1 2 5-3 3v5l-5 2-3-3H6l-4-5 3-3V6Z',
  search: 'm16 16 5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z', menu: 'M4 6h16M4 12h16M4 18h16', close: 'm5 5 14 14M5 19 19 5',
};
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] ?? paths.spark} /></svg>;
}
export function Brand() { return <a className="brand" href="#/"><span className="brand-symbol"><Icon name="spark" /></span><span>{es.brand}</span></a>; }
export function Button({ variant = 'primary', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  return <button className={`button button-${variant} ${className}`} {...props} />;
}
export function Card({ className = '', ...props }: HTMLAttributes<HTMLElement>) { return <article className={`card ${className}`} {...props} />; }
export function TextField({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) { return <input className={`input ${className}`} {...props} />; }
