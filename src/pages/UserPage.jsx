import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import { useShowToast } from "../hooks/useShowToast";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const toast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          toast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [toast, username]);

  if (!user) return null;

  return (
    <>
      <UserHeader user={user} />
    </>
  );
}
