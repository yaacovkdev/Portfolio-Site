<script lang="ts">
  import { onMount } from "svelte";
  import { messages } from "./messages.json";
  let title: HTMLElement;

  const setRandomMessage = (messages: Object): string => {
    const language =
      Object.keys(messages)[
        Math.floor(Math.random() * Object.keys(messages).length)
      ];

    return messages[language];
  };

  let message = setRandomMessage(messages);

  const updateMessage = () => {
    title.classList.remove("fade-in");
    title.classList.add("fade-out");
    console.log("come on fade out already!");

    setTimeout(() => {
      message = setRandomMessage(messages);
      console.log("switch");
      title.classList.remove("fade-out");
      title.classList.add("fade-in");
    }, 1000); // Duration of the fade-out animation
  };

  onMount(() => {
    title = document.querySelector("#title");

    setInterval(updateMessage, 6000);
  });
</script>

<h1 id="title" class="text-5xl text-amber-500 fade-in fade-out">{message}</h1>

<style lang="scss">
  .fade-out {
    animation: fadeOut 1s forwards ease-out;
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

  #title {
    @include title-margin;
  }
</style>
