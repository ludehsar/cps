import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles, Snackbar } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import DialogSelector from "./register_login/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import MuiAlert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Main(props) {
  const { classes } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(null);
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const openTermsDialog = useCallback(() => {
    setDialogOpen("termsOfService");
  }, [setDialogOpen]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const openChangePasswordDialog = useCallback(() => {
    setDialogOpen("changePassword");
  }, [setDialogOpen]);

  const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);

  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  const getUserData = useCallback(() => {
    axios.get('/api/user').then((res) => {
      setUser(res.data);
      setIsLoggedIn(true);
    }, [setUser, setIsLoggedIn]);
  }, [setUser, setIsLoggedIn]);

  const logoutUser = useCallback(() => {
    axios.post("/logout").then(() => {
      window.location.reload();
    });
  });

  const sendVerificationMail = useCallback(() => {
    axios.post('/email/resend').then(() => {
      enqueueSnackbar('Successfully sent mail!', { variant: 'success' });
    }).catch(() => {
      enqueueSnackbar('Something went wrong!', { variant: 'error' });
    });
  });

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className={classes.wrapper}>
      <Snackbar open={isLoggedIn && user.email_verified_at === null}>
        <Alert severity="error">
          You haven't verified your email. Please check your email for a verification link. If you did not receive the email, <a href="#" style={{ color: 'white' }} onClick={sendVerificationMail}>click here to request another</a>.
        </Alert>
      </Snackbar>
      {!isCookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
        />
      )}
      <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        openChangePasswordDialog={openChangePasswordDialog}
      />
      <CookieRulesDialog
        open={isCookieRulesDialogOpen}
        onClose={handleCookieRulesDialogClose}
      />
      <NavBar
        selectedTab={selectedTab}
        openLoginDialog={openLoginDialog}
        openRegisterDialog={openRegisterDialog}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
        isLoggedIn={isLoggedIn}
        userData={user}
        handleUserData={setUser}
        handleUserLogout={logoutUser}
      />
      <Routing
        blogPosts={blogPosts}
        selectHome={selectHome}
        selectBlog={selectBlog}
      />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
