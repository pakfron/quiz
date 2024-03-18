import Link from "next/link"

export default function Home() {
  return (
    <>
    <div>HOME PAGE</div>
    <Link href={'/quiz01'}>
    <div>Quiz 01</div>
    </Link>
    </>
  );
}
