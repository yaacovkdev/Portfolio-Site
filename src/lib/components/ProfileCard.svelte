<script lang="ts">
  import profile_picture from "$lib/images/profile/profile2.jpg";
  import location_icon from "$lib/images/icons/location-icon.svg";
  import ProfileInfoCard from "./ProfileInfoCard.svelte";
</script>

<div class="card">
  <div class="card__header">
    <div class="card__profile">
      <img class="profile-image" src={profile_picture} alt="profile" />
    </div>
    <div class="card__title">
      <h2 class="card__name mt-8">Jacob Kochatkov</h2>
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
          />British Columbia
        </p>
        <h4 class="location__status">OPEN TO RELOCATION</h4>
      </div>
    </div>
  </div>

  <div class="card__content">
    <ProfileInfoCard
      title="Bachelor's Degree"
      content="BSc. in Computing Science from Trinity Western University"
      icon="bachelors"
    />

    <ProfileInfoCard
      title="Junior Software Developer"
      content="1 year as a Junior Software Engineer for Happiness Mountain"
      icon="work"
    />

    <ProfileInfoCard
      title="Teaching Assistant"
      content="1+ years as a Teaching Assistant for Department of Computing Science and Mathematics at Trinity Western University"
      icon="work"
    />

    <ProfileInfoCard
      title="Skills"
      content="NodeJS, Flutter, Python, AWS..."
      icon="skills"
    />

    <ProfileInfoCard
      title="Bilingual"
      content="Fluent in English and Russian"
      icon="language"
    />

    <ProfileInfoCard
      title="Capstone Project"
      content="Quality Flooring - app to advertise flooring installation services and to contractors"
      icon="project"
    />
  </div>
</div>

<style lang="scss">
  .card {
    margin: auto;
    max-width: 64rem;
    padding: $mobile-padding;

    &__header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @include tablet {
        flex-direction: row;
        gap: 2rem;
      }
    }

    &__profile {
      width: fit-content;
      .profile-image {
        border-radius: 50%;
        min-width: 14rem;
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
          gap: 0.2rem;
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

    &__description::before {
      content: "";
      display: block;
      width: auto;
      height: 2px;
      border-radius: 50%;
      margin: 0.25rem 0;
      background: linear-gradient(
        to right,
        $amber,
        $gold 30%,
        $gold 70%,
        $amber
      );
      position: relative;
    }

    &__content {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }

    @keyframes shadow-zoom {
      0% {
        box-shadow: none;
      }

      100% {
        @include box-shadow;
      }
    }

    @include tablet {
      padding: 2rem;
      &:hover {
        animation: shadow-zoom 0.5s ease-in-out forwards;
      }
    }
  }
</style>
