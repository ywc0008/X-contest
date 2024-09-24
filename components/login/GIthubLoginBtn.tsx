"use client";

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function GIthubLoginBtn() {
  const router = useRouter();
  const handleLoginGithub = () => {
    try {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleLoginGithub}>깃허브 로그인</Button>;
}
