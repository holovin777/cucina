import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1><Link href="/ricette-vegetariane/insalata-di-ceci-con-avocado-e-pomodori-ciliegia/">Insalata di Ceci con Avocado e Pomodori Ciliegia</Link></h1>
      <h1><Link href="/ricette-vegetariane/pasta-con-verdure-miste/">Pasta con verdure miste</Link></h1>
      <h1><Link href="/ricette-vegetariane/frittata-alle-erbe-e-formaggio/">Frittata alle Erbe e Formaggio</Link></h1>
      <h1><Link href="/ricette-vegetariane/quinoa-con-verdure-arrosto/">Quinoa con Verdure Arrosto</Link></h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ricette",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

