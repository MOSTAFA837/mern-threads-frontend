import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
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

      <UserPost
        likes={401}
        replies={481}
        postImg="/post1.png"
        postTitle="let's talk abiut threads."
      />
      <UserPost
        likes={401}
        replies={481}
        postImg="/post2.png"
        postTitle="let's talk abiut threads."
      />
      <UserPost
        likes={401}
        replies={481}
        postImg="/post3.png"
        postTitle="let's talk abiut threads."
      />
    </>
  );
}
