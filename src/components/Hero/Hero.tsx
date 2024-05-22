import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./Hero.module.scss";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface Slide {
  title: string;
  subtitle: string;
  url: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      title: "El reestreno de Titanic en 4D",
      subtitle: "Este es el subtitulo 1",
      url: "https://media.glamour.com/photos/56957a138fa134644ec21f46/16:9/w_2580,c_limit/entertainment-2014-02-03-titanic-main.jpg",
    },
    {
      title: "El reestreno de El Padrino en 4D",
      subtitle: "Este es el subtitulo 1",
      url: "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/02/The-Godfather.jpg?quality=82&strip=all",
    },
    {
      title: "Los 2 wachos que bailan, bailan mas!",
      subtitle: "Este es el subtitulo 1",
      url: "https://www.theglobeandmail.com/resizer/aTdpG1_Sz_oz6UuwGZTDSgcphSY=/arc-anglerfish-tgam-prod-tgam/public/QX3GDBKSUZD7DJC3EBKSX4GVJQ",
    },
    {
      title: "What the fuck is she saying?",
      subtitle: "Este es el subtitulo 1",
      url: "https://img.buzzfeed.com/buzzfeed-static/static/2020-07/16/21/asset/376710843a71/sub-buzz-2540-1594934454-1.jpg",
    },
    {
      title: "Puchito y a la cama",
      subtitle: "Este es el subtitulo 1",
      url: "https://www.tasteofcinema.com/wp-content/uploads/2018/04/the_good_the_bad_and_the_ugly_1-e1515097152629.jpeg",
    },
    {
      title: "Me estoy cagando",
      subtitle: "Este es el subtitulo 1",
      url: "https://i2.cdn.turner.com/cnnnext/dam/assets/210623005620-forrest-gump-original-movie-scene.jpg",
    },
    {
      title: "Otaku o Peronista? Conoce mas de la trivia popular",
      subtitle: "Este es el subtitulo 1",
      url: "https://cdn.vox-cdn.com/thumbor/w_rhWyjPyqmqPitPHmJZmPW6J_A=/298x0:2040x1360/1200x675/filters:focal(1173x361:1499x687)/cdn.vox-cdn.com/uploads/chorus_image/image/66869633/jbareham_200520_1021_ghibli_week_0001b.0.jpg",
    },
    {
      title: "Revivimos la entrevista con Joaquin Phoenix",
      subtitle: "Este es el subtitulo 1",
      url: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1587595623972-EUK32SK9ZJ8U9B8LZXP8/watch-a-22-minute-behind-the-scenes-featurette-for-dcs-joker-social.jpg?format=2500w",
    },
  ];

  const renderSlide = ({ title, url, subtitle }: Slide, index: number) => (
    <SwiperSlide
      key={title}
      virtualIndex={index}
      className={styles.swiperSlide}
    >
      <div className={styles.slideContainer}>
        <div className={styles.slideImageContainer}>
          <img
            src={url}
            alt={title}
            className={styles.slideImage}
            loading="lazy"
          />
        </div>
        <div className={styles.slideInfoContainer}>
          <h2 className={styles.slideTitle}>{title}</h2>
          <span className={styles.slideSubtitle}>{subtitle}</span>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <div className={styles.container}>
      <Swiper
        grabCursor
        centeredSlides
        effect="coverflow"
        initialSlide={1}
        slidesPerView={2}
        spaceBetween={-350}
        coverflowEffect={{
          rotate: 10,
          stretch: 1,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        {slides.map(renderSlide)}
      </Swiper>
    </div>
  );
};

export default Hero;
