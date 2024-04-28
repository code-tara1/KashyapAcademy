import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LightIcon, MeditationIcon, MicroscopeIcon } from "../../assets/icons";

const images = [
  <MeditationIcon boxSize={{ base: 12, md: 16 }} />,
  <MicroscopeIcon boxSize={{ base: 12, md: 16 }} />,
  <LightIcon boxSize={{ base: 12, md: 16 }} />,
  // Add more image objects here if needed
];

const LoadingScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 700); // Change the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            opacity: index === currentImageIndex ? 1 : 0, // Adjust opacity based on the current index
            marginRight: "10px", // Adjust spacing between images
          }}
          transition={easeIn} // Adjust the transition duration
        >
          {image}
        </motion.div>
      ))}
    </div>
  );
};

export default LoadingScreen;
