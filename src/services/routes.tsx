import Home from '@/pages/Home';
import About from '@/pages/About';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/DataPrivacy';
import Tools from '@/pages/Tools';
import { tools } from '@/constants/tools';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <About /> },
  { path: '/terms-of-service', element: <TermsOfService /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  {
    path: '/tools',
    element: <Tools />,
    children: [
      ...tools.map((tool) => ({
        path: `${tool.id}`,
        element: <Tools tool={tool} />,
      })),
    ],
  },
];

export default routes;
