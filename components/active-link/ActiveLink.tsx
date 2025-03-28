"use client";
import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  text: string;
}
export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathName = usePathname();
  //console.log(pathName);
  return (
    <Link
    className={`${styles.link} ${pathName === path ? styles["active-link"] : ""}`}
    href={path}
    >
      {text}
    </Link>
  );
};
