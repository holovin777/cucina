import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from './navbar.module.css';


export const Navbar = component$(() => {

  return (
    <ul class={styles.ul}>
      <li class={styles.li}>
        <Link class={styles.brand} href="/">Cucina di Holovin</Link>
      </li>
      <li class={styles.li}>
        <Link class={styles.a} href="/ricette">Ricette</Link>
      </li>
    </ul>
  );
});
