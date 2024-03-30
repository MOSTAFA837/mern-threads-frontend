import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

export default function UserPage() {
  return (
    <>
      <UserHeader />
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
