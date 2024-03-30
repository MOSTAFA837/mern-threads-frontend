import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import authScreenAtom from "../../atoms/authAtom";
import SignupCard from "../components/SignupCard";

export default function AuthPage() {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
}
