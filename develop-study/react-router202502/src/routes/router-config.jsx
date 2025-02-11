import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";
import RootLayout from "../layouts/RootLayout";

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '', // '/'(슬래시) 생략 가능
    element: <RootLayout />,
    children: [
      {
        index: true, // '/'(슬래시) 겹쳐서 보이는거 싫음 → index: true로
        element: <IndexPage />,
      },
      {
        path: 'blog',// '/'(슬래시) 생략 가능
        element: <BlogPage />,
      },
      {
        path: 'about',// '/'(슬래시) 생략 가능
        element: <AboutPage />,
      },
    ],
  },
]);