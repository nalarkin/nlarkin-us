import React, { ReactNode } from 'react';

import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import Layout from 'components/layouts/layout';

function Category({ children }: { children: ReactNode }) {
  return <Typography textAlign={'center'}>{children}</Typography>;
}
function Info({ children }: { children: ReactNode }) {
  return <Typography textAlign={'center'}>{children}</Typography>;
}

const MuiListItem = ({
  primary,
  secondary,
  href,
  newTab = true,
}: {
  primary: ReactNode;
  secondary: ReactNode;
  href?: string;
  newTab?: boolean;
}) => {
  if (href === undefined) {
    return (
      <ListItem>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    );
  }

  return (
    <ListItemButton
      href={href}
      component="a"
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
    >
      <ListItemText primary={primary} secondary={secondary} />
    </ListItemButton>
  );
};

const ContactPage = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <Card>
        <CardHeader title={'Nathan Larkin'} />
        <Divider />
        <List>
          <ListItemButton href={'tel:7045334302'} component="a">
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={'Phone'} secondary={'704-533-4302'} />
          </ListItemButton>
          <ListItemButton
            href={'mailto:nlarkin1@student.gsu.edu'}
            component="a"
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary={'Student Email'}
              secondary={'nlarkin1@student.gsu.edu'}
            />
          </ListItemButton>
          <ListItemButton
            href={'mailto:nathanlarkin.usa@gmail.com'}
            component="a"
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary={'Personal Email'}
              secondary={'nathanlarkin.usa@gmail.com'}
            />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton
            href={'https://www.linkedin.com/in/nalarkin'}
            component="a"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText
              primary={'LinkedIn'}
              secondary={'www.linkedin.com/in/nalarkin'}
            />
          </ListItemButton>
          <ListItemButton
            href={'https://www.github.com/nalarkin'}
            component="a"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText
              primary={'Github'}
              secondary={'https://github.com/nalarkin'}
            />
          </ListItemButton>
        </List>
      </Card>
    </Container>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

/**
 * name
 * phone
 * email
 * linkedin
 * github
 * image
 */
