import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <ul>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/frittata-alle-erbe-e-formaggio/">Frittata alle Erbe e Formaggio</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/insalata-di-ceci-con-avocado-e-pomodori-ciliegia/">Insalata di Ceci con Avocado e Pomodori Ciliegia</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/insalata-di-pasta-con-salsa-di-ceci-e-formaggio/">Insalata di Pasta con Salsa di Ceci e Formaggio</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/pasta-con-verdure-miste/">Pasta con verdure miste</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/quinoa-con-verdure-arrosto/">Quinoa con Verdure Arrosto</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/minestra-di-fagioli-borlotti/">Minestra di Fagioli Borlotti</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/risotto-ai-funghi/">Risotto ai Fungi</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/zuppa-di-grano-saraceno/">Zuppa di Grano Saraceno</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/ricette/vegetariane/zuppa-di-piselli/">Zuppa di Piselli</Link>
          </h1>
        </button>
      </li>
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