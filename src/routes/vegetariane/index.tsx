import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <ul>
      <li>
        <button>
          <h1>
            <Link href="/vegetariane/insalata-di-ceci-con-avocado-e-pomodori-ciliegia/">Insalata di Ceci con Avocado e Pomodori Ciliegia</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/vegetariane/pasta-con-verdure-miste/">Pasta con verdure miste</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/vegetariane/frittata-alle-erbe-e-formaggio/">Frittata alle Erbe e Formaggio</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/vegetariane/quinoa-con-verdure-arrosto/">Quinoa con Verdure Arrosto</Link>
          </h1>
        </button>
      </li>
      <li>
        <button>
          <h1>
            <Link href="/vegetariane/risotto-ai-funghi/">Risotto ai Fungi</Link>
          </h1>
        </button>
      </li>
    </ul>
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

