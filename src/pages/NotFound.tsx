import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Hidayyah Islamic Fashion</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Hidayyah's Islamic fashion collection and style guides." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-accent hover:text-accent-hover underline transition-fast">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
