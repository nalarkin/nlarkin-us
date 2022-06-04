import React from 'react';

import { Button, ButtonProps } from '@mui/material';

export function ProjectButton({
  href,
  text,
  variant,
}: {
  href: string;
  text: string;
  variant: ButtonProps['variant'];
}) {
  return (
    <Button
      color="primary"
      href={href}
      target="_blank"
      rel="noopener"
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
