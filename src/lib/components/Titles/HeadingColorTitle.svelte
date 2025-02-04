<script lang="ts">
    const colors: string[] = [
        "purple",
        "bluepurple",
        "gold",
        "darkred",
        "red",
        "green",
        "blue",
        "teal",
        "brown",
        "gray",
        "white",
    ];

    export let color: string;
    if(!colors.includes(color)) {
        color = "white";
    }
</script>

<div class={"news-title"+` ${color}-background`}>
    <h1 class="heading-color-title"><slot /></h1>
</div>

<style lang="scss">
  .heading-color-title {
    padding: 1em 0;
    @include title-margins;
    @include scale-fonts-title;
  }

  .news-title {
    margin: auto;

    @include box-shadow;

    @include tablet {
      border-radius: 2rem;
    }
  }

  .purple-background {
    background-color: $purple;
    color: $white;
  }

  .bluepurple-background {
    background-color: $purpleheart;
    color: $white;
  }

  .gold-background {
    background-color: $gold;
  }

  .darkred-background {
    background-color: $pirategold;
    color: $white;
  }

  .red-background {
    background-color: $coral;
  }

  .green-background {
    background-color: $lightgreen;
  }

  .blue-background {
    background-color: $diamondblue;
  }

  .teal-background {
    background-color: $teal;
  }

  .brown-background {
    background-color: $rosewood;
  }

  .gray-background {
    background-color: $gray;
  }

  .white-background {
    background-color: $white;
  }
</style>




