import clsx from 'clsx';

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'flex items-center gap-2 text-base pb-2')}>
      <Shield className="w-12 h-12" />
      Блокировка сайтов
    </div>
  );
}

export const Shield = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 64 64"
  >
    <path
      fill="#728084"
      d="M35.8 23.7h17.9C53.3 14.9 50.4 9 50.4 9s-5.6.8-9.5 0c-1.8-.4-3.6-1.2-5.1-2.1v16.8m-7.6 0V6.9c-1.4.9-3.2 1.7-5 2.1c-4 .8-9.5 0-9.5 0s-3 5.9-3.3 14.7h17.8m0 7.4H10.6c.1.4.1.8.2 1.2C12.6 43.6 22.7 53 28.2 57.4V31.1m7.6 0v26.3c5.6-4.4 15.6-13.8 17.4-25.1c.1-.4.1-.8.2-1.1l-17.6-.1"
    />
    <path
      fill="#b0bdc6"
      d="M36.5 22.7h17.9C54.1 13.9 51.2 8 51.2 8s-5.6.8-9.5 0c-1.9-.3-3.7-1.2-5.2-2v16.7m-9 0V6c-1.5.8-3.3 1.7-5.1 2c-4 .8-9.5 0-9.5 0s-3 5.9-3.3 14.7h17.9m0 9.1H9.8c.1.4.1.8.2 1.1C11.9 44.2 21.9 53.6 27.5 58V31.8m9 0V58c5.6-4.4 15.6-13.8 17.4-25.1c.1-.4.1-.8.2-1.1H36.5"
      opacity=".3"
    />
    <path fill="#89969b" d="M28 3.8h8V61h-8z" />
    <path fill="#b0bdc6" d="M29 3.8h6V61h-6z" />
    <path fill="#89969b" d="M8.8 23.3h46.4v8H8.8z" />
    <path fill="#b0bdc6" d="M8.8 24.3h46.4v6H8.8z" />
    <path
      d="M32 60.8c-.3 0-.6-.1-.9-.3c-.7-.5-18.5-12.3-21.1-28.2C7.9 19 12.7 9.1 12.9 8.6c.3-.6 1-1 1.7-.9c0 0 2.3.3 4.9.3c1.5 0 2.7-.1 3.7-.3c3.8-.7 7.7-4.1 7.7-4.1c.6-.5 1.5-.5 2.1 0c0 0 4 3.4 7.7 4.2c1 .2 2.3.3 3.7.3c2.6 0 4.8-.3 4.9-.3c.7-.1 1.4.3 1.7.9c.2.4 5 10.4 2.9 23.6c-2.5 15.9-20.3 27.7-21 28.2c-.3.2-.6.3-.9.3M15.4 11.2C14.3 14 11.7 22 13.3 31.8c2 12.5 15.2 22.8 18.7 25.4c3.6-2.6 16.7-12.9 18.7-25.4c1.6-9.8-1-17.8-2.1-20.6c-1 .1-2.5.2-4.1.2c-1.7 0-3.2-.1-4.4-.4c-3.3-.7-6.5-2.8-8.1-4c-1.6 1.2-4.8 3.4-8.1 4.1c-1.2.2-2.7.4-4.4.4c-1.6-.1-3.1-.2-4.1-.3"
      opacity=".2"
    />
    <g fill="#b0bdc6">
      <path d="M32 64c-.3 0-.7-.1-1-.3c-.8-.6-20.6-13.7-23.4-31.4c-2.4-14.7 3-25.8 3.2-26.2c.4-.7 1.1-1.1 1.9-1c0 0 2.6.4 5.4.4c1.6 0 3-.1 4.2-.3c4.2-.8 8.5-4.6 8.6-4.6c.7-.6 1.7-.6 2.4 0c0 0 4.4 3.8 8.6 4.6c1.1.2 2.5.3 4.2.3c2.8 0 5.4-.4 5.4-.4c.8-.1 1.5.3 1.9 1c.2.5 5.6 11.5 3.2 26.2C53.6 50 33.8 63.2 33 63.7c-.3.2-.7.3-1 .3M13.5 8.9c-1.2 3.1-4.1 11.9-2.4 22.8C13.4 45.6 28 57.1 32 59.9c4-2.9 18.6-14.3 20.8-28.2c1.7-10.9-1.1-19.8-2.4-22.8c-1.1.1-2.7.2-4.5.2c-1.9 0-3.5-.1-4.9-.4c-3.7-.7-7.3-3.2-9.1-4.5c-1.8 1.4-5.4 3.8-9.1 4.5c-1.4.3-3 .4-4.9.4c-1.6 0-3.3-.1-4.4-.2" />
      <path d="M32 61.7c-.3 0-.6-.1-.9-.3c-.8-.5-19.1-12.7-21.7-29.1c-2.2-13.7 2.8-23.9 3-24.3c.3-.7 1-1 1.7-.9c0 0 2.4.3 5 .3c1.5 0 2.8-.1 3.9-.3c3.9-.8 7.9-4.3 8-4.3c.6-.5 1.6-.5 2.2 0c0 0 4.1 3.5 8 4.3c1.1.2 2.3.3 3.9.3c2.6 0 5-.3 5-.3c.7-.1 1.4.3 1.7.9c.2.4 5.2 10.7 3 24.3C52 48.7 33.7 60.9 32.9 61.4c-.3.2-.6.3-.9.3M14.9 10.6c-1.1 2.9-3.8 11.1-2.2 21.2C14.8 44.6 28.3 55.2 32 57.9c3.7-2.7 17.2-13.2 19.3-26.2c1.6-10.1-1.1-18.3-2.2-21.2c-1 .1-2.5.2-4.2.2c-1.7 0-3.3-.1-4.5-.4c-3.4-.6-6.7-2.8-8.4-4.1c-1.7 1.3-5 3.5-8.4 4.2c-1.3.3-2.8.4-4.5.4c-1.7 0-3.2-.1-4.2-.2" />
    </g>
    <path
      fill="#dfe9ef"
      d="M32 62.9c-.3 0-.7-.1-1-.3c-.8-.5-19.9-13.3-22.6-30.4C6.1 18 11.3 7.4 11.5 6.9c.3-.7 1.1-1.1 1.8-1c0 0 2.5.4 5.2.4c1.6 0 2.9-.1 4-.3c4-.8 8.3-4.4 8.3-4.5c.7-.6 1.6-.6 2.3 0c0 0 4.3 3.7 8.3 4.5c1.1.2 2.4.3 4 .3c2.7 0 5.2-.3 5.2-.4c.8-.1 1.5.3 1.8 1c.2.4 5.4 11.1 3.1 25.4C52.8 49.4 33.8 62.1 33 62.7c-.3.1-.7.2-1 .2M14.2 9.6c-1.2 3-4 11.6-2.3 22.1C14 45.2 28.2 56.2 32 59c3.8-2.8 18-13.8 20.1-27.3c1.7-10.5-1.1-19.1-2.3-22.1c-1.1.1-2.7.2-4.4.2c-1.8 0-3.4-.1-4.7-.4c-3.6-.7-7-3-8.8-4.4c-1.7 1.3-5.2 3.6-8.8 4.4c-1.3.3-2.9.4-4.7.4c-1.6.1-3.2-.1-4.2-.2"
    />
    <circle cx="32" cy="3.1" r="1.4" fill="#b0bdc6" />
    <circle cx="32" cy="3.1" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M32 3.7c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1s1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="50.9" cy="8" r="1.4" fill="#b0bdc6" />
    <circle cx="50.9" cy="8" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M50.9 8.6c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="54.3" cy="21.2" r="1.4" fill="#b0bdc6" />
    <circle cx="54.3" cy="21.2" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M54.3 21.8c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="52.3" cy="37.7" r="1.4" fill="#b0bdc6" />
    <circle cx="52.3" cy="37.7" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M52.3 38.2c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1s1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="44" cy="50.5" r="1.4" fill="#b0bdc6" />
    <circle cx="44" cy="50.5" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M44 51c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1s1-.4 1.1-1c-.3.4-.7.5-1.1.5"
    />
    <circle cx="32" cy="60.7" r="1.4" fill="#b0bdc6" />
    <circle cx="32" cy="60.7" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M32 61.3c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="20" cy="50.5" r="1.4" fill="#b0bdc6" />
    <circle cx="20" cy="50.5" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M20 51c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.4-.7.5-1.1.5"
    />
    <circle cx="11.7" cy="37.7" r="1.4" fill="#b0bdc6" />
    <circle cx="11.7" cy="37.7" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M11.7 38.2c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="9.7" cy="21.2" r="1.4" fill="#b0bdc6" />
    <circle cx="9.7" cy="21.2" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M9.7 21.8c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
    <circle cx="13.1" cy="8" r="1.4" fill="#b0bdc6" />
    <circle cx="13.1" cy="8" r="1.1" fill="#dfe9ef" />
    <path
      fill="#89969b"
      d="M13.1 8.6c-.4 0-.8-.2-1.1-.5c.1.6.5 1 1.1 1c.6 0 1-.4 1.1-1c-.3.3-.7.5-1.1.5"
    />
  </svg>
);
