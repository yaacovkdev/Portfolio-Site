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

    setTimeout(() => {
      message = setRandomMessage(messages);
      title.classList.remove("fade-out");
      title.classList.add("fade-in");
    }, 500); // Duration of the fade-out animation
  };

  onMount(() => {
    title = document.querySelector("#title");

    setInterval(updateMessage, 4500);
  });
</script>

<h1 id="title" class="text-4xl text-amber-500 fade-in">{message}</h1>

<style lang="scss">
  .fade-out {
    animation: fadeOut 0.5s forwards;
  }

  .fade-in {
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
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
