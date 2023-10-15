import Link from "next/link";
import { AppBar, Grid, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>
          <AppBar position="static">
            <Toolbar>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Link href="/">
                    {" "}
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/posts/something">
                    {" "}
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Something
                  </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          {children}
        </section>
      </body>
    </html>
  );
}
