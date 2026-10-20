import React from 'react';

import { Button, ButtonProps } from '@mui/material';
import NextLink from 'next/link';

export function ProjectButton({
  href,
  text,
  variant,
}: {
  href: string;
  text: string;
  variant: ButtonProps['variant'];
}) {
  const isInternal = href.startsWith('/') && !href.startsWith('//');

  return (
    <Button
      color="primary"
      component={isInternal ? NextLink : 'a'}
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener'}
      variant={variant}
      sx={{
        color: (theme) =>
          variant !== 'contained' ? theme.palette.info.main : undefined,
      }}
    >
      {text}
    </Button>
  );
}
