<script lang="ts">
    import {getContext, onMount} from "svelte";
    import type {AuthorStatus} from "$lib/data/getStatus";

    const statusToCSS = {
        "ONLINE": "online",
        "BUSY": "busy",
        "OFFLINE": "offline",
        "NODISTURB": "no-disturb",
    }

    const author_status: AuthorStatus = getContext("author-status"); //requests on home page loading

    let status_state: AuthorStatus = $state(author_status);
    let status = $derived(status_state.status);
    let message = $derived(status_state.message);

    onMount(() => {
        const clientFetchStatus = async () => {
            const response = await fetch('/status', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json());

            status_state = {status: response.status, message: response.message};
        };

        clientFetchStatus(); //requests on home page DOM loading
        const getStatusInterval = setInterval( async () => {
            clientFetchStatus();
        }, 60000);

        return(() => {
            clearInterval(getStatusInterval);
        });
    });
</script>

{#if status !== "UNAVAILABLE" && statusToCSS[status]}
<div class="status-block inline-block">
    <h6>
    <span class={`blink blink--${statusToCSS[status]}`}>
        <span class="pulse"></span>
    </span>
    {message}
    </h6>
</div>
{/if}




<style style lang="scss">
  .status-block {
    @include scale-fonts-small;
  }

  .blink, .pulse {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
  }

  .blink {
    animation: blinker 2s linear infinite;
    position: relative;
    z-index: 2;

    .pulse {
      animation: scaler 2s linear infinite;
      position: absolute;

      transform-origin: 5px 5px;
      opacity: 0.7;
      z-index: 1;
    }

    @mixin color-blink($color) {
      background-color: $color;
      .pulse {
        background: radial-gradient(
                        rgba(0,0,0,0) 0%,
                        rgba(0,0,0,0) 50%,
                        rgba($color, 1) 75%,
                        rgba($color, 1) 100%
        );
      }

      @if $color == $darkgray or $color == $red {
        animation: none;
        .pulse {
          animation: none;
        }
      } @else if $color == $orange {
        animation-duration: 4s;

        .pulse {
          animation-duration: 4s;
        }
      }
    }

    &--online {
      @include color-blink($swamp);
    }

    &--busy {
      @include color-blink($orange);
    }

    &--no-disturb {
      @include color-blink($red);
    }

    &--offline {
      @include color-blink($darkgray);
    }
  }
  @keyframes blinker {
    50% {
      opacity: 0.7;
    }
  }

  @keyframes scaler {
    0% {
      scale: 1;
      opacity: 0.7;
    }
    50% {
      scale: 1.5;
      opacity: 0.2;
    }
    51% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

</style>