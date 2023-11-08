import { Grid } from '@mui/material';

const AuthLayout = ({ children }: any) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center">
      <img src="amazon-logo.png" alt="Amazon-logo" height="40px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
