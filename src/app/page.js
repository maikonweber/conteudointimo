import Image from "next/image";
import { Header } from "../component/Header"
export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between bg-red-200 p-24">
     Home
    </main>
    </>  
 );
}
