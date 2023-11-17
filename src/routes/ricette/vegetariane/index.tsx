import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Li } from "~/components/link/link";

export default component$(() => {
  return (
    <ul class="ul">
      <Li
        href="/ricette/vegetariane/couscous-alle-verdure-grigliate/"
        name="Couscous alle Verdure Grigliate"
      />
      <Li
        href="/ricette/vegetariane/crema-di-zucca/"
        name="Crema di Zucca"
      />
      <Li
        href="/ricette/vegetariane/frittata-alle-erbe-e-formaggio/"
        name="Frittata alle Erbe e Formaggio"
      />
      <Li
        href="/ricette/vegetariane/frittata-vegetariana/"
        name="Frittata vegetariana"
      />
      <Li
        href="/ricette/vegetariane/insalata-di-ceci-con-avocado-e-pomodori-ciliegia/"
        name="Insalata di Ceci con Avocado e Pomodori Ciliegia"
      />
      <Li
        href="/ricette/vegetariane/insalata-di-pasta-con-salsa-di-ceci-e-formaggio/"
        name="Insalata di Pasta con Salsa di Ceci e Formaggio"
      />
      <Li
        href="/ricette/vegetariane/minestra-di-fagioli-borlotti/"
        name="Minestra di Fagioli Borlotti"
      />
      <Li
        href="/ricette/vegetariane/pasta-al-pesto-di-avocado/"
        name="Pasta al pesto di avocado"
      />
      <Li
        href="/ricette/vegetariane/pasta-al-pesto-di-pomodoro-e-basilico/"
        name="Pasta al Pesto di Pomodoro e Basilico"
      />
      <Li
        href="/ricette/vegetariane/pasta-alla-carbonara/"
        name="Pasta alla Carbonara"
      />
      <Li
        href="/ricette/vegetariane/pasta-con-verdure-miste/"
        name="Pasta con verdure miste"
      />
      <Li
        href="/ricette/vegetariane/quinoa-con-verdure-arrosto/"
        name="Quinoa con Verdure Arrosto"
      />
      <Li
        href="/ricette/vegetariane/risotto-ai-funghi/"
        name="Risotto ai Fungi"
      />
      <Li
        href="/ricette/vegetariane/risotto-ai-funghi-e-zafferano/"
        name="Risotto ai Fungi e Zafferano"
      />
      <Li
        href="/ricette/vegetariane/zuppa-di-grano-saraceno/"
        name="Zuppa di Grano Saraceno"
      />
      <Li
        href="/ricette/vegetariane/zuppa-di-piselli/"
        name="Zuppa di Piselli"
      />
    </ul>
  );
});

export const head: DocumentHead = {
  title: "Ricette Vegetariane",
  meta: [
    {
      name: "description",
      content: "Ricette Vegetariane",
    },
  ],
};
