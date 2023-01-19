import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import image_1 from "../../../assets/gotland_1.jpeg";
import image_2 from "../../../assets/gotland_2.jpeg";
import image_3 from "../../../assets/gotland_fur_closeup.jpeg";
import { Helmet } from "react-helmet";

const sliderSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FurCarousel = () => {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      image: image_3,
    },
    {
      image: image_2,
    },
    {
      image: image_1,
    },
  ];

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Box
        position={"relative"}
        height={"90vh"}
        width={"full"}
        overflow={"hidden"}
      >
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -20%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt color="white" size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -20%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt color="white" size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...sliderSettings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"lg"}
              width={"lg"}
              position="relative"
              backgroundSize="auto 100%"
              bgImage={` url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default FurCarousel;
