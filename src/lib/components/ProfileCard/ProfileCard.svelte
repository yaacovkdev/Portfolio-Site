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

  import bachelors_icon from "$lib/images/icons/bachelors.svg";
  import work_icon from "$lib/images/icons/work.svg";
  import skills_icon from "$lib/images/icons/skills.svg";
  import experience_icon from "$lib/images/icons/experience.png";
  import project_icon from "$lib/images/icons/project.svg";
  import volunteering_icon from "$lib/images/icons/volunteer.png";
  import StatusDot from "$lib/components/Animated/StatusDot.svelte";

  const INTERVAL_MS = 16; //to run animation at 60FPS.
  const TIME_INTERVAL = 0.4;

  let dropCard = null, returnCard = null;

  onMount(() => {
    const profileCard = document.querySelector(".profile-card");
    const card = document.querySelector(".card");
    const cardBack = document.querySelector(".card-back");
    const svelteBody = document.querySelector("#svelteBody");

    card.style.top = "0";
    card.classList.remove("rotate-anim");
    card.overflow = "hidden";
    profileCard.style.visibility = "visible"; //prevents seeing rotation animation from playing on launch

    const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0].contentBoxSize) {
            const cardHeight = entries[0].borderBoxSize[0].blockSize;

            if(cardHeight > 0) cardBack.style.height = `${cardHeight}px`;
            else cardBack.style.height = "";
        }
    });

    resizeObserver.observe(card);

    let fallingAnimationInterval = null;

    dropCard = () => {
        svelteBody.style.overflow = "hidden";
        card.classList.add("rotate-anim");
        let time = 0;
        fallingAnimationInterval = setInterval(() => {
            const pos = fallDistance((time += TIME_INTERVAL));
        card.style.top = `${pos}px`;

        if (time > 20) {
          card.style.display = "none";
          card.classList.remove("rotate-anim");
          card.style.top = "0";
          time = 0;
          clearInterval(fallingAnimationInterval);
          svelteBody.style.overflow = "visible";
        }
      }, INTERVAL_MS);
    };

    returnCard = () => {
      card.style.display = "block";
      card.classList.remove("rotate-anim");
      card.style.top = "0";
      clearInterval(fallingAnimationInterval);
        svelteBody.style.overflow = "visible";
    };

    return(() => {
      resizeObserver.unobserve(card);
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
      <div class="card__title max-w-[350px]">
        <h2 class="card__name mt-8">Jacob Kochatkov</h2>
        <div class="card__description">
            <div class="inline-flex flex-row justify-start items-start gap-4 w-full">
                <h4 class="flex-shrink-0">Fullstack Developer</h4>
                <div class="flex-shrink-2">
                    <StatusDot />
                </div>
            </div>
        </div>

        <div class="location my-2">
          <p class="location__text">
            <img
              id="locationIcon"
              class="location__img w-4"
              src={location_icon}
              alt="location"
            />British Columbia, Canada
          </p>
        </div>
      </div>
    </div>

    <div class="card__content">
        <ProfileInfoCard title="Fullstack Developer" icon={work_icon}>
            Fullstack Engineer at <BlueLink href="https://albernionline.ca/" end={true}>Alberni Online</BlueLink><br>
            Freelancer
        </ProfileInfoCard>

        <ProfileInfoCard title="Past Experience" icon={experience_icon}>
            Intern Software Engineer at <BlueLink href="https://www.happinessmountain.com/" end={true}>Happiness Mountain Inc</BlueLink><br>
            Instructor of Computer Science at <BlueLink href="https://regent.bc.ca/" end={true}>Regent Christian Academy</BlueLink>
        </ProfileInfoCard>

        <ProfileInfoCard title="Bachelor's Degree" icon={bachelors_icon}>
            BSc. in Computing Science from <BlueLink href="https://twu.ca/" end={true}>Trinity Western University</BlueLink>
        </ProfileInfoCard>

      <ProfileInfoCard
        title="Skills"
        icon={skills_icon}
      >
        Backend, Web, Mobile Development,<br>
          Python, JS/TS, PHP, C++, Flutter, AWS
      </ProfileInfoCard>

      <ProfileInfoCard
        title="Volunteering"
        icon={volunteering_icon}
      >
          Worship Team<br>
          VanJS<br>
          YVR AI Meetup
      </ProfileInfoCard>

        <ProfileInfoCard
            title="Pursuits"
            icon={project_icon}
        >
            AWS Certification<br>
            Self-Hosting<br>
            Public Speaking<br>
            Descrete Mathematics
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
    z-index: 2;

    margin: auto;
    max-width: 64rem;
    min-height: 42rem;
    visibility: hidden;
  }

  .card-back {
    @include scale-fonts-regular;
    position: relative;
    width: 100%;
    min-height: 608px;
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
    width: inherit;
    padding: $mobile-padding;
    background-color: $background;
    z-index: 4;

    background-image: url("/src/lib/images/misc/card_background.svg");
    background-position: center 50px;
    background-repeat: no-repeat;
    background-size: max(700px, 150%);

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
        border: 10px solid $gray;
      }
    }

    &__title {
      text-align: start;

      .location {
        @include scale-fonts-regular;
        display: flex;
        justify-content: start;
        gap: 1rem;
        align-items: baseline;

        &__text {
          display: inline-flex;
          align-items: baseline;
          gap: 0.2rem;
        }
      }
    }

    &__name {
      @apply text-3xl;

      @include desktop {
        @apply text-4xl;
      }
    }

    &__description::before {
      content: "";
      display: block;

      height: 0.15rem;
      border-radius: 10px;
      margin: 0.25rem 0;
      background: linear-gradient(
        to right,
                      $mango,
        $secondary 30%,
        $secondary 70%,
                      $mango
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
