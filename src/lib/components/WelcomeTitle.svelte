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
    }, 500); // Duration of the fade-out animation
  };

  onMount(() => {
    homeTitle = document.querySelector("#homeTitle");

    setInterval(updateMessage, 4500);
  });
</script>

<div class="welcome-title">
  <h1 id="homeTitle" class="text-amber-500 fade-in">{message}</h1>
</div>

<style lang="scss">
  .welcome-title {
    //height: 5rem;
    #homeTitle {
      @include scale-fonts-title;
    }
  }

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

  #homeTitle {
    @include title-margin;
  }
</style>
