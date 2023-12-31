import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LiProps {
  name: string;
  href: string;
}

export const Li = component$<LiProps>((props) => {
  return (
    <li class="li">
      <b>
        <Link href={props.href}>{props.name}</Link>
      </b>
    </li>
  );
});