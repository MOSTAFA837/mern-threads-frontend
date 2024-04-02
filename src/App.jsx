import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import { userAtom } from "./atoms/userAtom";
import CreatePost from "./components/CreatePost";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/update"
          element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />

        <Route
          path="/:username"
          element={
            user ? (
              <>
                <UserPage />
                <CreatePost />
              </>
            ) : (
              <UserPage />
            )
          }
        />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Navigate to="/auth" />}
        />
      </Routes>

      {/* {user && <CreatePost />} */}
    </Container>
  );
}

export default App;
