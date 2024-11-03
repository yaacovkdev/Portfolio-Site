<script lang="ts">
  import profile_picture from "$lib/images/profile/profile2.jpg";
  import location_icon from "$lib/images/icons/location-icon.svg";
  import ProfileInfoCard from "./ProfileInfoCard.svelte";

  import linkedin_icon from "$lib/images/icons/linkedin.png";
  import github_icon from "$lib/images/icons/github.png";
  import email_icon from "$lib/images/icons/email.png";

  import { fallDistance } from "$lib/scripts/gravityFall";
  import { onMount } from "svelte";
  import ConnectButton from "$lib/components/ProfileCard/ConnectButton.svelte";
  import BlueLink from "$lib/components/BlueLink.svelte";

  let dropCard;
  let returnCard;

  const msInterval = 16; //to run animation at 60FPS.
  const timeInterval = 400 / 1000;

  onMount(() => {
    const profileCard = document.querySelector(".profile-card");
    const card = document.querySelector(".card");
    const cardBack = document.querySelector(".card-back");

    card.style.top = "0";
    card.classList.remove("rotate-anim");
    profileCard.style.visibility = "visible"; //prevents seeing rotation animation from playing on launch

    //function to resize
    const handleResize = () => {
      if (card.style.display !== "none")
        cardBack.style.height = `${card.getBoundingClientRect().height}px`;
      else cardBack.style.height = "";
    };

    dropCard = () => {
      let time = 0;
      card.classList.add("rotate-anim");

      const fallingAnimation = setInterval(() => {
        const pos = fallDistance((time += timeInterval));
        card.style.top = `${pos}px`;

        if (time > 15) {
          clearInterval(fallingAnimation);
          card.style.display = "none";
          card.classList.remove("rotate-anim");
          card.style.top = "0";
          time = 0;
          handleResize();
        }
      }, msInterval);
    };

    returnCard = () => {
      const card = document.querySelector(".card");
      card.style.display = "block";
      card.style.top = "0";
      handleResize();
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return(() => {
      window.removeEventListener("resize", handleResize);
    });
  });
</script>

<div class="profile-card">
  <!-- Links in the back of the Profile Card -->
  <div class="card-back">
    <div class="card-back__panel">
      <a
        class="card-back__link"
        href="https://www.linkedin.com/in/jacobkochatkov/"
      >
        <img src={linkedin_icon} alt="linkedin_icon" />
      </a>
      <p class="card-back__content">
        Let's grab a coffee, or meet for a virtual chat!
      </p>
    </div>

    <div class="card-back__panel">
      <a class="card-back__link" href="https://github.com/yaacovkdev">
        <img src={github_icon} alt="linkedin_icon" />
      </a>
      <p class="card-back__content">
        Checkout my codebases and collaborations! I will be happy to share more
        details!
      </p>
    </div>

    <div class="card-back__panel">
      <a class="card-back__link" href="mailto:jacob.kochatkov@gmail.com">
        <img src={email_icon} alt="linkedin_icon" />
      </a>
      <p class="card-back__content">
        Feel free to write me an email! I'd love to get in touch.
      </p>
    </div>
  </div>

  <!-- The front of the Card -->
  <div class="card rotate-anim">
    <div class="card__header">
      <div class="card__profile">
        <img class="profile-image" src={profile_picture} alt="profile" />
      </div>
      <div class="card__title">
        <h2 class="card__name mt-8">Jacob Kochatkov</h2>
        <h4 class="card__description">
          BSc. of Computer Science upskilling in Full Stack Development
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
      <ProfileInfoCard title="Bachelor's Degree" icon="bachelors">
        BSc. in Computing Science from <BlueLink href="https://twu.ca/" end={true}>Trinity Western University</BlueLink>
      </ProfileInfoCard>

      <ProfileInfoCard title="Intern Software Engineer" icon="work">
        1 year as a Software Engineer for <BlueLink href="https://www.happinessmountain.com/" end={true}>Happiness Mountain Inc.</BlueLink>
      </ProfileInfoCard>

      <ProfileInfoCard
        title="Teaching Assistant"
        icon="work"
      >
        1+ years as a Teaching Assistant for Department of Computing Science and Mathematics at Trinity Western University
      </ProfileInfoCard>

      <ProfileInfoCard
        title="Skills"
        icon="skills"
      >
        Amazon Web Services, TypeScript, NodeJS, Flutter, Python, Restful API, Pendo SDK, MySQL, Airtable
      </ProfileInfoCard>

      <ProfileInfoCard
        title="Volunteering"
        icon="volunteering"
      >
        Youth Group<br>
        Worship Team
      </ProfileInfoCard>

      <ProfileInfoCard
        title="Projects "
        icon="project"
      >
        <BlueLink href="https://github.com/yaacovkdev/Quality-Flooring">Quality Flooring</BlueLink> - Web app with <BlueLink href="https://github.com/yaacovkdev/Flooring-API">API</BlueLink><br>
        <BlueLink href="https://github.com/nicmart-dev/feedmenow">FeedMeNow</BlueLink> - AI Recipe Generator
      </ProfileInfoCard>
    </div>
  </div>

  <ConnectButton
    action={dropCard}
    revAction={returnCard}
  />
</div>

<style lang="scss">
  .profile-card {
    position: relative;

    margin: auto;
    max-width: 64rem;
    min-height: 42rem;
    visibility: hidden;
  }

  .card-back {
    @include scale-fonts-regular;
    position: relative;
    width: 100%;
    min-height: 42rem;
    padding: $mobile-padding;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    text-align: start;
    flex-wrap: wrap;
    gap: 4rem;

    &__panel {
      width: 15rem;
      text-align: center;
    }

    &__link {
      img {
        min-width: 5rem;
        height: 5rem;
        margin: auto;

        @include tablet {
          min-width: 7rem;
          height: 7rem;
        }

        @include desktop {
          min-width: 8rem;
          height: 8rem;
        }
      }
    }

    &__content {
      margin-top: 2rem;
    }

    @include tablet {
      padding: $desktop-padding;
    }
  }

  .card {
    position: absolute;
    width: 100%;
    padding: $mobile-padding;
    background-color: $background;
    z-index: 1;

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

      height: 0.15rem;
      border-radius: 10px;
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
      padding: $desktop-padding;
      @include box-shadow;
    }
  }

  @keyframes rotate-card {
    0% {
      transform: rotate3d(1, 1, 1, 0deg);
    }

    100% {
      transform: rotate3d(1, 1, 1, 100deg);
    }
  }

  .rotate-anim {
    animation: rotate-card 1s linear forwards;
  }
</style>
