import React from 'react';

import Link from 'next/link';

type BottomProps = {
  text: string;
  url: string;
};

/** Formats and creates link for the links the bottom divider of the footer */
export const FooterLinkBottom = ({ text, url }: BottomProps) => {
  return (
    <Link href={url} key={text}>
      <a className="p-2 capitalize text-xs w-max hover:underline focus:underline ">
        {text}
      </a>
    </Link>
  );
};
/** Formats and creates link for the links the bottom divider of the footer */
export const FooterLinkTop = ({ text, url }: BottomProps) => {
  return (
    <Link href={url} key={text}>
      <a className=" text-sm  flex w-40 hover:underline focus:underline text-black ">
        {text}
      </a>
    </Link>
  );
};
