import { Card, Cards } from "fumadocs-ui/components/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Hello World</h1>
      <Link href="/shared/spec/v1" className="font-medium underline">
        Software Requirements Specification
      </Link>
      <Link href="/shared/guide" className="font-medium underline">
        User Guide
      </Link>
    </div>
  );
}
