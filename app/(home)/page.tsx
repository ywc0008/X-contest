import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = auth.currentUser;
  console.log(user);

  if (!user) {
    redirect("/login");
  }

  return <div></div>;
}
