import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <Image
        className="rounded-xl"
        src="/images/not-found.png"
        alt="not found"
        width={300}
        height={300}
        sizes="300px"
        priority={true}
      />
      <Link href={"/home"} className="mt-4 text-gray-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
