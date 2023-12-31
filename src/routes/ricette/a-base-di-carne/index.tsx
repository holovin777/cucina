import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Li } from "~/components/li/li";

export default component$(() => {
  return (
    <ul class="ul">
      <Li
        href="/ricette/a-base-di-carne/arrosto-di-maiale-con-salsa-di-senape-e-miele/"
        name="Arrosto di Maiale con Salsa di Senape e Miele"
      />
      <Li
        href="/ricette/a-base-di-carne/girelle/"
        name="Girelle"
      />
      <Li
        href="/ricette/a-base-di-carne/pasta-alla-carbonara/"
        name="Pasta alla Carbonara"
      />
      <Li
        href="/ricette/a-base-di-carne/rotolo-di-prosciutto-cotto-e-philadelphia/"
        name="Rotolo di Prosciutto cotto e Philadelphia"
      />
      <Li
        href="/ricette/a-base-di-carne/saltimbocca-alla-romana/"
        name="Saltimbocca alla Romana"
      />
    </ul>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ricette a base di carne",
  meta: [
    {
      name: "description",
      content: "Welcome to Ricette a base di carne",
    },
  ],
};