import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg h-screen w-screen flex flex-col justify-center items-center">
      Todo Application
      <div className="p-2">
        <Link className="text-sm border p-2 m-2" href="/signin">
          Sign In
        </Link>
        <Link className="text-sm border p-2 m-2" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
