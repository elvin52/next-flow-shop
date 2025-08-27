import { Helmet } from 'react-helmet-async';
import { NewsletterAdmin } from '@/components/NewsletterAdmin';

const NewsletterManagement = () => {
  return (
    <>
      <Helmet>
        <title>Newsletter Management | Hidayyah</title>
        <meta name="description" content="Manage newsletter subscribers and send updates about Islamic fashion trends and new arrivals at Hidayyah." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NewsletterAdmin />
    </>
  );
};

export default NewsletterManagement;