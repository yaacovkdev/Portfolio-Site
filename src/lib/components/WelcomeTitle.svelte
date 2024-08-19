<script lang="ts">
  import { onMount } from "svelte";
  import { messages } from "./messages.json";
  let homeTitle: HTMLElement;

  const setRandomMessage = (messages: Object): string => {
    const language =
      Object.keys(messages)[
        Math.floor(Math.random() * Object.keys(messages).length)
      ];

    return messages[language];
  };

  let message = setRandomMessage(messages);

  const updateMessage = () => {
    homeTitle.classList.remove("fade-in");
    homeTitle.classList.add("fade-out");

    setTimeout(() => {
      message = setRandomMessage(messages);

      homeTitle.classList.remove("fade-out");
      homeTitle.classList.add("fade-in");
    }, 750); // Duration of the fade-out animation
  };

  onMount(() => {
    homeTitle = document.querySelector("#homeTitle");

    setInterval(updateMessage, 6000);
  });
</script>

<div class="welcome-title">
  <h1 id="homeTitle" class="h-20 text-4xl md:text-5xl xl:text-6xl text-amber-500 fade-in fade-out">
    {message}
  </h1>
</div>

<style lang="scss">
  .fade-out {
    animation: fadeOut 0.75s forwards ease-out;
  }

  .fade-in {
    animation: fadeIn 2s forwards;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #homeTitle {
    @include title-padding;
  }
</style>
