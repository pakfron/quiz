import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="mb-10">
      <div className="flex gap-10">
        <div>
          <Link href={"/"}>
          Home
          </Link>
        </div>
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
      </div>
    </nav>
  );
}
