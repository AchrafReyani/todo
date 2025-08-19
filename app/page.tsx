import { redirect } from "next/navigation";

export default function Home() {
  redirect("/todo-app");
  return null;
}