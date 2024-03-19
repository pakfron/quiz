import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={"/quiz01"}>Quiz01</Link>
      </div>
      <div>
        <Link href={"/quiz02"}>Quiz02</Link>
      </div>
      <div>
        <Link href={"/quiz03"}>Quiz03</Link>
      </div>
      <div>
        <Link href={"/quiz04"}>Quiz04</Link>
      </div>
    </>
  );
}
