import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import WebsiteIcon from '@mui/icons-material/Public';

export const getLinkIcons = (title) => {
  switch (title) {
    case "github":
      return (
        <GithubIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "linkedin":
      return (
        <LinkedInIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "twitter":
      return (
        <TwitterIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "instagram":
      return (
        <InstagramIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "facebook":
      return (
        <FacebookIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "youtube":
      return (
        <YoutubeIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    case "website":
      return (
        <WebsiteIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
    default:
      return (
        <WebsiteIcon
          sx={{
            fontSize: "3rem",
          }}
        />
      );
  }
};
