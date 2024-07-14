<script lang="ts">
  import profile_picture from "$lib/images/profile/profile.jpg";
  import location_icon from "$lib/images/icons/location-icon.svg";
</script>

<div class="card">
  <div class="card__header">
    <div class="card__profile">
      <img class="profile-image" src={profile_picture} alt="profile" />
    </div>
    <div class="card__title">
      <h2 class="card__name mt-8 mb-2">Jacob Kochatkov</h2>
      <h4 class="card__description">
        BSc. of Computer Science upskilling in Web Development
      </h4>

      <div class="location my-2">
        <p class="location__text">
          <img
            id="locationIcon"
            class="location__img w-4"
            src={location_icon}
            alt="location"
          /> British Columbia
        </p>
        <h4 class="location__status">OPEN TO RELOCATION</h4>
      </div>
    </div>
  </div>

  <div class="card__content"></div>
</div>

<style lang="scss">
  .card {
    width: 100%;
    padding: $mobile-padding;

    &__header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__profile {
      width: fit-content;
      .profile-image {
        border-radius: 50%;
        width: 14rem;
        border: 10px solid rgb(214, 214, 214);
      }
    }

    &__title {
      text-align: start;

      .location {
        display: flex;
        justify-content: start;
        gap: 1rem;
        align-items: baseline;

        &__text {
          display: inline-flex;
          align-items: baseline;
        }

        &__status {
          @include scale-fonts-small;
          background-color: $lightgreen;
          line-height: 1rem;
          border-radius: 0.5rem;
          padding: 0 0.25rem;
        }
      }
    }

    &__name {
      @apply text-3xl;

      @include desktop {
        @apply text-4xl;
      }
    }

    &__description,
    .location {
      @include scale-fonts-regular;
    }
  }
</style>
