import { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import image_1 from "../../assets/sheep_1.jpg";
import image_2 from "../../assets/sheep_maja.jpg";
import image_3 from "../../assets/goats_main_view.jpg";
import { Helmet } from "react-helmet";

// Settings for the slider
const settings = {
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

const CaptionCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "SMÅSKALIGHET",
      text: "Djur och Människor i balans",
      image: image_1,
      mode: "dark",
    },
    {
      title: "HÅLLBARHET",
      text: "Respektfullt och försiktig djurhållning",
      image: image_2,
      mode: "dark",
    },
    {
      title: "ENGAGEMANG",
      text: "Lär nytt varje dag",
      image: image_3,
      mode: "dark",
    },
  ];

  return (
    <>
      <Helmet>
        {/* CSS files for react-slick */}
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
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"6xl"}
              position="relative"
              // backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              bgImage={`linear-gradient(rgba(0, 0, 0, 0.27),rgba(0, 0, 0, 0.2)) , url(${card.image})`}
              // bgGradient='linear(to-t, black, white)'
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  bottom="10%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    as={"h3"}
                    color={card.mode === "light" ? "black" : "white"}
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>
                  <Heading
                  as={'h4'}
                  mt={'-15px'}
                    color={card.mode === "light" ? "black" : "white"}
                  >
                    {card.text}
                  </Heading>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default CaptionCarousel;
